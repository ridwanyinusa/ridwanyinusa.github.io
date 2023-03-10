'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "088c76fbd76cf03010029c19a28ba7d5",
".git/config": "9aef6d48ada9e55904e33bbb111b6646",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3a22b504548f01f8c4e3993de8c78fd2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2536727128b848c33063a6137bf7c2da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9978ffacf35e5212417b196df3ecc893",
".git/logs/refs/heads/main": "fcd7b26ad7348939602e11976186ee64",
".git/logs/refs/remotes/origin/main": "3849a16c34308a7e3f550a922db0e864",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/b5d4a60f718ab7ac04b49a828fb3d6d19cfbb7": "cee6df86ce12a251ada78a5419b7933d",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/6cb5b01da3d2cd1b5a9c2005a4d535314d2614": "8bac2fe6f0a503a4e82b32d66741e191",
".git/objects/0e/e53ecc6369db4fd96c2f3382d6bb4a96f70e67": "facfa209c853193944025d6186c467c1",
".git/objects/13/94e0020de5d195ebcbffe15fcf61186478c330": "3fb1157c16c24583f53ffb39d2192bf4",
".git/objects/18/b5962e152f500d55d67428afe020ed313a95b7": "c9e67fefad56af96a8ab896c4c497b5b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1f/8dcb6f2c5c339df5812e8775b7ac159e03d57c": "1da4d0eb611fc4983ca1c5bc1d70634b",
".git/objects/20/0f5b4ba81bd637e79325208d7ed4ff30825e49": "873fd28d7a43d32e026c63b34456fdba",
".git/objects/20/942a11078b215221ab7c4dd70defc72998ef07": "8f2fdae165c8cfa2df7f3927f0c27d6e",
".git/objects/24/209f4dc779c71bec8b9535d2620a8723146d84": "6f5d318b53cfaa6193402c42c1a4a130",
".git/objects/2c/88409bae2b0b4bcbaf3173da50d0f212b27404": "5c58d8c4df918c33ba75728d8ab7b48b",
".git/objects/2d/e75433927ee126c2bf29de2d06718f81e25f44": "aa1c4ab60215cfd57e7b0420c0999629",
".git/objects/2f/583b86190729143d1ec3e5cef10ac59d521276": "926d06f6fb8d73aa0d0b451f64c7d5bd",
".git/objects/32/def6cd054c6ff0cddaa3432695f8f461580ee9": "c387bd80bc1a38c177af5f35cbdf4b76",
".git/objects/35/63e3ac2ccccf650c21b9f15b0efe2e147928b7": "bc9f0c7e37d8f8e16f0dffce88105820",
".git/objects/39/bdad5a057b989ae795b47d256b01158fd43224": "a2c4244c13a111d11d2b569902e96bc9",
".git/objects/42/9874866d31a76f25cf7142ac36d88df1bf3351": "43fed357f2fad598eac1ff14602f8b3d",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4f/3686c9229b65b7a5c9453a25548a6a2f6d45f4": "3f2549c5634b801a089cc1703dbeadd5",
".git/objects/4f/ede2d19d4bdf19995dfa7284822dc9dadd38a3": "7b58bfc8250af3289f1d40c11c09a03f",
".git/objects/50/4727b7489ea8a911c7be60433d8ea95cb77004": "e4d603ff1e2c9279fadd09ca32b78434",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/627267280ae9ba57d46b1fee84c3eaa5e0d762": "2ceef1840cc2dca862d6d5a38565abab",
".git/objects/53/6d72366aab71069732694d91ff287efd2cc1db": "902f0df2def795b48500d47363230860",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/c0b0f9807b95d9dcbe91eb6a19735999459849": "1b7ac2c17e2dae7658e0b1b43486766a",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/7b0e07a9119bc77396c0134799fff32738e519": "03ecf7a038362edac812d36d499877f7",
".git/objects/61/8c8a255e3206f2501bfec272cd84514ef96774": "239d67641325536968299636cec486a3",
".git/objects/65/3ed589d711978d3b8d1c25a3e8802b55f02097": "ff0b697cabb08a859acd4b8c7d648681",
".git/objects/68/3f552917a342c81a76d8a2458cb8e46b0c5102": "5e734fdcfba37c98f8afcb676151b651",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/06becc741aca37c9579099ffbed3a52a0186d8": "8fa8c2b4462f33c93fe0a30067f3fdd9",
".git/objects/6f/51dd2fef1e24c69b71e141dda7e8bdecedd215": "8cb46726d77689d1b1cf6e19b40758b9",
".git/objects/72/155d579fa0889786681324ac1a94de524b590c": "86a50f5d6b3792f432453d547ffae981",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/7b/e66616f0182482008e54e416f53169d7a06e1b": "61b8d7ce649db4a1503da27370f2fa66",
".git/objects/82/f7364bc5c0e0a9ba22bf398f5d65c27f5e6df8": "b5dc5e74c9a4b74bbcb4fd6ddff34718",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/86/edb8790f1f192681af7185e471044fe6fe097b": "e53f480a6938b89599ae1757c14e18a5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f71a52e132c45635d747b420df74c06639a20d": "091dae3ec3d87f7cc2a22a98e1277a02",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e2338468ddda6e1b7d5599d5ebb0bf320a86e2": "0b9c9da3382e8a2251d94ede97e743c8",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b4/42f05c378cb320bb858327490e3aa4fed57188": "6df4e6524ec15e68942d54a81d0fe4c6",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/f438bbd329d17c9a6a693a4444603f7ab55974": "75d18078154310949fd966e63a376e82",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/c20446321c68514c8f20d1dfd0b2ea25b7a74a": "3550632bf469a4a8da248a9062b74daa",
".git/objects/c2/f24994ad04efef8389fee07aaa9b4b3dc4276e": "b6869c80825b2fb0b8e86a4c953ea92b",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/e21c4f51d5cb7713717bf74de5cbc725afae94": "115969c4f2f9ec42981882ced1367792",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c9/ac346d87bb6e6db3fa0900a6ef668da32ed2da": "be1a95da29146522e0bd3e92cdaeb17f",
".git/objects/cb/d396276674ff47424bfefbef788a5dd56df352": "df334cad05066374ff2ebf9b55d8af58",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d5/56526c2e4f44114ad7adb9682bfe9a0c73716b": "3486801df59f9c831eb782a1eea15eac",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/16dc864d2095e06542257026e7e407b76b4e1f": "69b840e1fdd3da2c4ff72e93b3d8065f",
".git/objects/db/1f204c0d33a57a2801ae46a831395d733bfbb3": "cbe285eccfd6ce2944184568b8e2caa3",
".git/objects/db/f060d12db7436359fc1c86215e6236193f3d8e": "d4e8f82969763cc3938557aa9946b6f2",
".git/objects/e5/fcf128076eddd306b770128d03139fbb222970": "025cbdbaebbfbf589c91c63c1dc930e3",
".git/objects/e6/63455f2c72503a5bd5585aaf1383de671636de": "df3da859bd83bfce3252ccb5a27bce3f",
".git/objects/e6/91185c236f2face159a03f48b57c8d88de046e": "09d876e3209ffaccf66c7bc709097e8d",
".git/objects/e8/b2eff7092c5fa45e86a564f52b90020023f312": "4815d996c1a8b740a43f859dd8aed10a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/fd6ddd90dc0ed82f0d48c1fd7a66ee497635e3": "392ebd2f169fa0e94da881408569fd03",
".git/objects/f2/2edafda00a1702c7f3125274562fd54d26746f": "fee8c644b368db2e7d91e2194931e5a8",
".git/objects/f7/9d1df2d1427e64bcbe13dac74c0c57ea3b1e8b": "335a737b67fe624709850a6af805cacd",
".git/objects/fa/80bc1c3b2dd81dffb0ab820bb408534327154e": "1722cf548e564e3fbc9147b361a6a156",
".git/objects/fa/e62efb01e29e37d9cc64fdd6d011122639ab7d": "28d34521f9947d3619912d406aeab5eb",
".git/objects/fc/da6efef6052f3a925ee078311dad5e276c9ae0": "8f7077dc92196c6cab426668b3b20865",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "a668205554a12f0d853987704650a283",
".git/refs/heads/main": "33e4560ee9c29076852d667614e34b69",
".git/refs/remotes/origin/main": "33e4560ee9c29076852d667614e34b69",
"assets/AssetManifest.bin": "d6b852f8a672ca9cd0b60b51bbb3a5ae",
"assets/AssetManifest.json": "a7df29894e6739f7aa13ef8b8b00a4a0",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "ad6744e2c188986d7ceae90924549188",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bg1.jpg": "7767b0d270c69dc72bc07832c3832a22",
"assets/assets/images/Home.png": "59089143dc242a7c6c77650e073c1585",
"assets/assets/images/p1-1.png": "88c16ae95bfbea1382e8e7354e9cc468",
"assets/assets/images/p1-2.png": "14f0e2ffe79f9342dd4c505d44650ac9",
"assets/assets/images/p1-3.png": "86dd67937aaee7cc492feb3bd0dac591",
"assets/assets/images/p1-4.png": "b0cbd0ae13d0b422a9d3f58dd6259324",
"assets/assets/images/p1-5.png": "7dfd37e7301eb85f15f9f02017ca25e1",
"assets/assets/images/p1-6.png": "1ec7a91a692359d905a47eeac30e1875",
"assets/assets/images/p1-7.png": "26f24a3734d24dcb5ff9213e9ed1c1c4",
"assets/assets/images/ROY.png": "f4dd90c278da0fd90ec9bed4068cd8a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f5b9663df46ca9fcde26350ac9b8f586",
"assets/NOTICES": "f87a7c220cdefca0bf6db9f277480005",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "eaf78f7ce5381314d288629446bf807f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "2910b04607a7dd7ab1aa3d916ef5cfff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "327d26dcecdb130afe83f56aa36a5bae",
"/": "327d26dcecdb130afe83f56aa36a5bae",
"main.dart.js": "d0583a671eb204f66498355108fe21dd",
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
