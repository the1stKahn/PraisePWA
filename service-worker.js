const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/PraisePWA/',
    '/PraisePWA/index.html',
    '/PraisePWA/style.css',
    '/PraisePWA/app.js',
    '/PraisePWA/manifest.json',
    '/PraisePWA/icons/icon-128.png',
    '/PraisePWA/icons/icon-512.png'
];
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});

