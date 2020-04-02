var CACHE_NAME = 'site-static';
var urlsToCache = [
	'/',
	'/index.html',
	'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
];

// Install a service worker
self.addEventListener('install', event => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			console.log('Opened cache');
			cache.addAll(urlsToCache);
		})
	);
});

// Cache and return requests
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(cacheRes => {
			return cacheRes || fetch(event.request);
		})
	);
});

// Update a service worker
self.addEventListener('activate', event => {
	var cacheWhitelist = ['pwa-task-manager'];
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});