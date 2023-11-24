'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2227652c98b2a0e6e044b0a8b7d55394",
"assets/AssetManifest.json": "e53de357b96ae9b6d423861d1171612c",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/AKSHAYA_Mess.webp": "22a932cbccaceb83d9daced585003f62",
"assets/assets/images/Amrutha_Mess.webp": "5e0018cc1c52473347dbb94e2d66377f",
"assets/assets/images/app_launcher_icon.png": "ec2b00806ca32d49f731ed5dbe0132cf",
"assets/assets/images/darkshow.png": "f27dffd1f1a7e2f21eff2c045e001a0e",
"assets/assets/images/dev.jpeg": "d605908a82b0002ece764b91925c2e3d",
"assets/assets/images/eat.svg": "b5b989f2cf2a13b5189d981ac22bdea9",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/KAMADHENU_Mess.webp": "e8efba17c15c1bfaaddb4eab55b24bcd",
"assets/assets/images/lightshow.png": "3fc86d75bbf73f21ccaf053418cfcf59",
"assets/assets/images/LOGO.png": "8e3fd2998575fcf3cb73e330398e9d13",
"assets/assets/images/LOGOlightmodefull.png": "d89d837437b3596aea2be2bc452f4266",
"assets/assets/images/pattern.png": "4fecbda38f70709e7a71085e70824c38",
"assets/assets/images/patterndark.png": "c0bd3ec346ee2ad65b68a1f9e8f16d83",
"assets/assets/images/ps_icon.png": "ec2b00806ca32d49f731ed5dbe0132cf",
"assets/assets/images/ps_icon_dark.png": "c5b6e75e201c0ed5bfddf80d32310412",
"assets/assets/images/splash.jpg": "e6cfbb470b8bdd171ce5938490e404dc",
"assets/assets/lottie_animations/27011-sungrass-emoji.json": "903767b98646464ef856d4f1d6fa0067",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/star-struck_lottie.json": "4a2a3801d3d6ba707533643af1b5b1e4",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "99f4b3c2c30bec352bd9495772368acf",
"assets/NOTICES": "895fbd41085c4e0a6e69e98f6f13c654",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"eat.svg": "b5b989f2cf2a13b5189d981ac22bdea9",
"favicon.png": "3fa257cc0c964ec9c340fd8a1dafbd5e",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/app_launcher_icon.png": "ec2b00806ca32d49f731ed5dbe0132cf",
"icons/Icon-192.png": "ac6ce7ac780f5e8de97118631b463a87",
"icons/Icon-512.png": "ddbc0d069689b52fed3d64bbc057da27",
"icons/Icon-maskable-192.png": "ac6ce7ac780f5e8de97118631b463a87",
"icons/Icon-maskable-512.png": "ddbc0d069689b52fed3d64bbc057da27",
"index.html": "4e0a2c3892e22f7cfad7ba0b210833ad",
"/": "4e0a2c3892e22f7cfad7ba0b210833ad",
"main.dart.js": "0fa4055f5f9b4de6e37c1cb314c9cab4",
"manifest.json": "d5066e89ee90c138315e23959566636d",
"ps_icon.png": "ec2b00806ca32d49f731ed5dbe0132cf",
"version.json": "047561122b9687029c55a043939282e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
