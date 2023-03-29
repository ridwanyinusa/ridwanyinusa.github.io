'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bb5e4370813dced13cfc98fa4e5e3b36",
"assets/AssetManifest.json": "8d9928b4892beb39ae9ab4fdcafbbb5f",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "ad6744e2c188986d7ceae90924549188",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/b1.jpg": "d910a87adb0e79c7775b82e54de5e7f0",
"assets/assets/images/b2.jpg": "928b5b627778bb99562af23cc8834428",
"assets/assets/images/b3.jpg": "4020db8361fb6ae0f4a89ed8e7f581a9",
"assets/assets/images/b4.jpg": "85a7e57b58f73e4a6c5bc25ad4408ead",
"assets/assets/images/b5.jpg": "8fd8fae812c5103c6504ba12a3fc0456",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bg1.jpg": "7767b0d270c69dc72bc07832c3832a22",
"assets/assets/images/c1.jpg": "b980fa331f8d7ee2fa298e675a9891bc",
"assets/assets/images/c2.jpg": "067461e15c5de89ab1b01baedb53a331",
"assets/assets/images/c3.jpg": "8ce43de7618a0fe4e5a9662e80162557",
"assets/assets/images/c4.jpg": "f79bc053e846c4eaf2a5b7077236f16a",
"assets/assets/images/c5.jpg": "c291c54019abecee12dfd28ef2c66814",
"assets/assets/images/c6.jpg": "dc5e1028ea12604c20d6a1801da92c1a",
"assets/assets/images/c7.jpg": "8919b0f54f797ebe26cefbe042058f0d",
"assets/assets/images/c8.jpg": "322288fde6ccf84a748f9f3a3b21e0fc",
"assets/assets/images/c9.jpg": "dc03d70526bb6f482c73aa8a270c2df8",
"assets/assets/images/CircleLoader.gif": "2e4adfdd85d32758def438ec80138f3d",
"assets/assets/images/css.glb": "3659661970ee7ce431b3262ee2626439",
"assets/assets/images/d1.jpg": "51a08a9556ded699d19e227bad81fbf3",
"assets/assets/images/d2.jpg": "f3ba95a635bfb56610bf13fdc122903b",
"assets/assets/images/d3.jpg": "049acb749c73f085ed253e69e7f3c954",
"assets/assets/images/d4.jpg": "1d82736d8e11ed8d7d2b4d7d18796034",
"assets/assets/images/d5.jpg": "31646f92f4f7cd46fc131f920c28ffc5",
"assets/assets/images/d6.jpg": "dbb0693ed796447caecfb8b17212197d",
"assets/assets/images/d7.jpg": "a5dcb2ae21d5f65b88b98ef70a1c0eb6",
"assets/assets/images/dart.glb": "00380e69715b27ee68b608d57a93b24c",
"assets/assets/images/dell.glb": "082732f85b446fdfc8eda4a1ba5827a0",
"assets/assets/images/flutter.glb": "9b9044162356f898fdca33aaae1ef465",
"assets/assets/images/Home.png": "59089143dc242a7c6c77650e073c1585",
"assets/assets/images/html.glb": "721ad270619a242c6a8f4eedd86e7f91",
"assets/assets/images/javascript.glb": "da5dd3e5bc44bdff7066798d42d6a493",
"assets/assets/images/js.glb": "b5b94c96723cd445c59b13a96385f17d",
"assets/assets/images/laptop.glb": "a98fd43b7de22e9eee6b49c664f4be0e",
"assets/assets/images/logo.png": "c063f5e8d60ee51c92d19a6331800d76",
"assets/assets/images/me.jpg": "c866f297e9d7ea71ece0e74b8059034a",
"assets/assets/images/p1-1.png": "88c16ae95bfbea1382e8e7354e9cc468",
"assets/assets/images/p1-2.png": "14f0e2ffe79f9342dd4c505d44650ac9",
"assets/assets/images/p1-3.png": "86dd67937aaee7cc492feb3bd0dac591",
"assets/assets/images/p1-4.png": "b0cbd0ae13d0b422a9d3f58dd6259324",
"assets/assets/images/p1-5.png": "7dfd37e7301eb85f15f9f02017ca25e1",
"assets/assets/images/p1-6.png": "1ec7a91a692359d905a47eeac30e1875",
"assets/assets/images/p1-7.png": "26f24a3734d24dcb5ff9213e9ed1c1c4",
"assets/assets/images/p1.jpg": "64fb679ec5a754e2c9ff1d03cbdf8594",
"assets/assets/images/p2.jpg": "54161402e5893b666b5699f18f2f8f0d",
"assets/assets/images/p3.jpg": "b2fcb0e1f38274a66f82587db4510c08",
"assets/assets/images/p4.jpg": "27436b05341e7f9994f8b59b625dc875",
"assets/assets/images/Ridwan_Yinusa_CV.pdf": "528175edbbd9c64dbcbd141a22874b18",
"assets/assets/images/ROY.png": "f4dd90c278da0fd90ec9bed4068cd8a9",
"assets/assets/images/scene.glb": "1a595b2dd4cb65cbc0c172d5f1aad8db",
"assets/assets/images/system.glb": "930086813c74904af646397b48ea5293",
"assets/assets/images/t1.jpg": "d154b1cafd9bcd65cb39b754d05fe421",
"assets/assets/images/t2.jpg": "14a1cc4e0272b6cc1c654a1b3fc307dd",
"assets/assets/images/t3.jpg": "83dbf49c338cb51a58b0e378bfa7966f",
"assets/assets/images/t4.jpg": "1c5dd77db4d0d6157bb9014f6b1a2094",
"assets/assets/images/vue.glb": "0a3bb391d8d1eef66abb36cb25f2f5d5",
"assets/assets/images/vuejs.glb": "b2b57321e514a0b7204dbb7306cc7008",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "828bbac8ddad7478913474d6a49118bc",
"assets/NOTICES": "7250b43c0ecedf76d70cfb401f6aba9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "663e2d8dc95b3eb6e813db7288f90115",
"canvaskit/chromium/canvaskit.js": "f39c7fbb70c7d277f537a7c366d75533",
"canvaskit/chromium/canvaskit.wasm": "b5bbefa86d22f7a1e94cda2a490b58bf",
"canvaskit/skwasm.js": "569eed0f1ca775eb9a112f5821ad278b",
"canvaskit/skwasm.wasm": "e5af8ff2312130582de5a1d858b06c25",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "c063f5e8d60ee51c92d19a6331800d76",
"faviconkj.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1de9b26dbb809f5abc14780406eb4c1",
"/": "e1de9b26dbb809f5abc14780406eb4c1",
"main.dart.js": "57213195584f7961862c0b691e63a579",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
