self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('static').then(function(cache) {
            return cache.addAll([
                "./", 
                "./index.html", 
                "./assets/css/style-starter.css",
                "./assets/css/eclipse-navigation.css",  
                "./assets/css/splash.css",
                "./assets/images/logo512.png"
            ]);
        })
  );
});

self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });