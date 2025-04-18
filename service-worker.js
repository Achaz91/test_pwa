const CACHE_NAME = 'pwa-test-cache-v1';
const urlsToCache = [
  '.',
  'app.py', // Assurez-vous que le nom de votre fichier Python correspond
  'manifest.json',
  'icon-192×192.png', // Ajoutez vos icônes si vous en avez
  'icon-512×512.png'  // Ajoutez vos icônes si vous en avez
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
