var cacheName = "pwa";
var prefetchUrls = [
  '/examples/aframe-vr-model/',
  '/examples/aframe-vr-model/aframe-master.min.js'
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(prefetchUrls);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
