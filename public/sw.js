const CACHE_NAME = "talent-connect-v1";

// Install
self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");

  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting:", cache);
            return caches.delete(cache);
          }
        }),
      );
    }),
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  // Only GET requests will be cached
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Cache Hit
      if (cachedResponse) {
        console.log("📦 Cache:", event.request.url);
        return cachedResponse;
      }

      // Cache Miss
      return fetch(event.request).then((networkResponse) => {
        // If response is not valid, don't cache it
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        // Save response in cache
        const responseClone = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        console.log("Network:", event.request.url);

        return networkResponse;
      });
    }),
  );
});
