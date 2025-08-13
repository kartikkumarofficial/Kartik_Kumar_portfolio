'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "93d174c45ddf1e0bc4069c40c0d52352",
"assets/AssetManifest.bin.json": "74f6313d3965c328628e6281675276f9",
"assets/AssetManifest.json": "1c2d1b6e67697c6dd51a16de919b0d5d",
"assets/assets/fonts/BurguesScript.otf": "4fb4d0da1bed256241a7c41788e5d62e",
"assets/assets/images/avatar.png": "354ece103ff01591b00617361dca175c",
"assets/assets/images/Background--.jpg": "2e442df5fd0425f4926972704eb36a19",
"assets/assets/images/Background-legacy.jpg": "3b7159f34feccb96311a0f73db31e796",
"assets/assets/images/Background.jpg": "40e2ee10e07574ff6fc0002407e00344",
"assets/assets/images/complete.png": "e3cca0e909b51420ea31319a1ad6ff54",
"assets/assets/images/Foreground-legacy.jpg": "50d626d106394a1a4eb00e787acaed5c",
"assets/assets/images/Foreground.jpg": "ff228f0ef19df0719fa2b54f9dcc8fbd",
"assets/assets/images/fragment1.png": "8d27e1116bd05f4f9552d70121c9c9b5",
"assets/assets/images/fragment2.png": "a6f5dd55b7d45d23e7c14c2d8919f10d",
"assets/assets/images/fragment3.png": "5f5dd0e6e049e59c16add1cb740d75f1",
"assets/assets/images/fragment4.png": "725e78de796b8dbb92c110ec38d08e25",
"assets/assets/images/fragment5.png": "432f1d8e9b7707183f6485a082842d00",
"assets/assets/images/fragment6.png": "c0e974ce9d556578958fa7d8ed57e1b9",
"assets/assets/images/logo_bg.png": "5aeb863e2e0ba86d5d0f5d09c00d8607",
"assets/assets/images/logo_bg_enh.png": "fad670def5a97ab7517fba5410067632",
"assets/assets/images/paper.png": "090f115d2d83014ab2a54a2a0156e966",
"assets/assets/images/workBg.png": "3f7563e18239832ed477b181dd81e490",
"assets/assets/images/works/pr1-1.jpg": "7ede371fa20749419bf2082ce26d24a0",
"assets/assets/images/works/pr1-2.jpg": "f05063bc0305bc270fdcd7ccd7c7028f",
"assets/assets/images/works/pr1-3.jpg": "eb783b76aff192b290a2d47b65d1343b",
"assets/assets/images/works/pr2-1.jpg": "3bdd67525e342fe515074a5fae52847e",
"assets/assets/images/works/pr2-2.jpg": "172048d60b2055a2765d5a98ad7aa9be",
"assets/assets/images/works/pr2-3.jpg": "9a5af11b4f7cec4cfcad215ff42173be",
"assets/assets/images/works/pr3-1.jpg": "ba8633f1d1ef5962be2d7d309be4a510",
"assets/assets/images/works/pr3-2.jpg": "450b9ba4ee7d7382b8bed0c1ca78b31f",
"assets/assets/images/works/pr3-3.jpg": "bc27857c0a6a5852e4019a343b0e3a11",
"assets/FontManifest.json": "98bb0193161efc5dfd234459efbee4cc",
"assets/fonts/MaterialIcons-Regular.otf": "c232cea42bdd18fa3b3da1d7270a0f9f",
"assets/NOTICES": "ebcdcb0eca5dd673075a6613b6066123",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/grain/assets/grain.png": "4ee11adfab0fa5ef9f9f32d865614f2e",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "6720b15e9ca116a97b1f4dfa310f6f26",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "95614f03ddcee9f35f5dd1ee302c95c7",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "e6c030b788d5c90da1f94723b61eba8a",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "fab7236d33bd21714f82b63388c5f9df",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "e98a47b171ad7ee488cc7b639a471580",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "7e1818629b2cdf2227c98300a8d01511",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "d15cf4efb7bcf361b7420283bb9cd460",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.svg": "fc18a82820c42f3bea63e571f9940a5e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "561def73f470939ad25927207d80d84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a058fc45df523782eed3c65c5f7ee12",
"/": "8a058fc45df523782eed3c65c5f7ee12",
"main.dart.js": "8919c8382f1ce799db522177677bb2f6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
