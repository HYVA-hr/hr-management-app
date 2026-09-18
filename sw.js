const CACHE_NAME = 'hire-your-va-v1';
const assetsToCache = [
  '/',
  'index.html',
  'employee-dashboard.html',
  'admin-dashboard.html',
  'employee-leaves.html',
  'admin-leaves.html',
  'employee-holidays.html',
  'logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
