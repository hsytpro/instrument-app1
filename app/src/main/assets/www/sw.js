/* Simple offline shell caching (PWA)
   Note: audio samples are fetched from remote soundfont CDN and are not cached here.
*/
const CACHE = "instrument-shell-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map(k => (k === CACHE) ? null : caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Only handle GET same-origin requests for shell assets
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((resp) => {
      // cache updates for same-origin static assets
      const copy = resp.clone();
      caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(()=>{});
      return resp;
    }).catch(() => caches.match("./index.html")))
  );
});
