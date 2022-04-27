var cacheName = 'almatsurat';
var filesToCache = [
	'./',
	'./index.html',
	'./favicon.png',
	'./assets/styles.css',
	'./assets/bootstrap.min.css',
	'./assets/bootstrap.bundle.min.js',
	'./assets/jquery-3.6.0.min.js',
	'./assets/kfc_naskh-webfont.ttf',
	'./assets/KFGQPCUthmanicScriptHAFS.otf'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(filesToCache);
		})
	);
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});
