'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e26ddc4694a1f7535d3fb3b7750cd553",
"assets/AssetManifest.bin.json": "0f9d71325f77d1e542ff536309b71cff",
"assets/AssetManifest.json": "6faa1ca572145b3f6c83e9670c1a503c",
"assets/assets/fonts/BurguesScript.otf": "4fb4d0da1bed256241a7c41788e5d62e",
"assets/assets/images/avatar.png": "354ece103ff01591b00617361dca175c",
"assets/assets/images/Background.jpg": "8057d748dca91e2a9105588095859f41",
"assets/assets/images/Foreground.jpg": "7217181b37a51ad860b1e62d28d3c71d",
"assets/assets/images/logo_bg.png": "5aeb863e2e0ba86d5d0f5d09c00d8607",
"assets/assets/images/logo_bg_enh.png": "fad670def5a97ab7517fba5410067632",
"assets/assets/images/paper.png": "090f115d2d83014ab2a54a2a0156e966",
"assets/assets/images/thumbnail.png": "32d5f1acf47bc0e90afae90debc89315",
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
"assets/assets/images/works/pr4-1.jpg": "8a14470e9764981e6c89423cf803e2b5",
"assets/assets/images/works/pr4-2.jpg": "7b52d8c3dda19460a1c4222c71da9b03",
"assets/assets/images/works/pr4-3.jpg": "6dc0ef1dfa8ffa99eb62a22c8a86b31f",
"assets/FontManifest.json": "27a3351069c42aaa0cdbe04f88e0caf7",
"assets/fonts/MaterialIcons-Regular.otf": "b646626f6875837f9f02d26c15e53c0b",
"assets/NOTICES": "7140c31642601394220fd7b1f026ef42",
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
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "ac21ed6a7343cea5d501514cf08ee94a",
"favicon.svg": "fc18a82820c42f3bea63e571f9940a5e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "575f646428123c9174b1073190804167",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a058fc45df523782eed3c65c5f7ee12",
"/": "8a058fc45df523782eed3c65c5f7ee12",
"main.dart.js": "aa6cab8dcf27c13e40b3353934793cfb",
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
