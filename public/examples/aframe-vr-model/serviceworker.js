var cacheName = "pwa";
var prefetchUrls = [
  '/examples/aframe-vr-model/index.html',
  '/examples/aframe-vr-model/aframe-master.min.js',
  '/examples/aframe-vr-model/assets/stall_v001.glb'
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
