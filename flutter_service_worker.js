'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "9aef6d48ada9e55904e33bbb111b6646",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d3f1d87a17e0d9f2e10857763227a806",
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
".git/index": "4449f54ff9a4c4e3181c7e500d7c46e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d98a67601e4fb80bbcc9acb3f1126f62",
".git/logs/refs/heads/main": "ffb25c9dd8e8a335bacf4f1169ec54ca",
".git/logs/refs/remotes/origin/main": "cfbd3248de96a4c630571e24be5218a9",
".git/objects/00/8620ce8dd5ff74ccedb9eae57a487ed512f117": "0114bd7a8edf5d4a6196d7731e0ab410",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/eb61fa53c049954430f21b911e8f27528ac9e8": "629728f267b7e5ae51fe47a21959c366",
".git/objects/05/0ff99fed8ff5e9e185d048dfcf34018ad1240d": "26c8f30a0e378f0d19d873cedb047747",
".git/objects/05/c3fcfdfa185c8201bea68b5fead2c57a298ec3": "add3d2021a97a1834ea69571e61e40b1",
".git/objects/0a/3228949630a90538767d4faceeb6ca49a28871": "4e16e502da27df104a7ddb8b6f317e84",
".git/objects/0b/1b349ac421a0655046db9b80d6fc415cb6ccf5": "b8859ce96b192a97941a10840ed99c9a",
".git/objects/0b/30caf20fbd75c1fb7197b8a352000eb19560b6": "c1e4ab7900f678b2fb146f213f2251e3",
".git/objects/0c/56b846c1b4a8af62eab2053077d8e4c81af19a": "17a9e256bf7d8500dc6ff6cca38b3fde",
".git/objects/0f/5dbd24184b935181bfb4bc3c69c846ab51e53b": "9434680106b665cf5eb5401c3b317391",
".git/objects/10/d27761d832805abde36434a238512ebdad71f5": "8682a1a9f25f8dcbf04be72cc1173825",
".git/objects/11/aa64c92dbda9d000b82d812116c1febfbca51c": "3bd1efddf3cf15db109672530ac42cf4",
".git/objects/13/0f76d158db6099f956d45d8b91aa740a74e5ed": "576889bc358246879fc30f25a8a199ae",
".git/objects/15/ad453ad999223555dae63e99cb4df8c7e65795": "ce8d73e4dda46bfc48cfa216c8e0d840",
".git/objects/18/00357fefdf1c98d1a8a37c0a9623c6bbf97d92": "378d907dfee08cfcc349f617717af3b2",
".git/objects/18/5dfd15677e01a236613abe31f49aa560f1ce51": "53aa3df520dd20898ee2d217a7fc0007",
".git/objects/19/bef2e40e67fde74b968c7db1e73b3d84e6d29b": "7585cd9b7650453e530eae44c9e0c9de",
".git/objects/1c/31de3c280a471a3d233385980c301b664687bc": "9f4d5d7e07a7cce6f711c1652948905e",
".git/objects/1c/7bb566c7d71530a0d3b92dd7d85b67a8b06607": "1b314060da7dbc9d1dd596d1f9710753",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/8de728c82e9ebfa94d0243de2080ce0cfa4dfd": "fed0093aef21f03a768ecde9a73aa9a8",
".git/objects/1f/8502893be75686cf0c01c5502e13d814af5a14": "53b11bb04c346c74145421a7652a57e8",
".git/objects/1f/8dcb6f2c5c339df5812e8775b7ac159e03d57c": "1da4d0eb611fc4983ca1c5bc1d70634b",
".git/objects/20/41d5b7b8791f392eecba29f0a70e362bf30349": "ce56cf7471fd3d9ed82fd0c0cd221246",
".git/objects/20/85414db9e30a95a02c44c2bf57e6ed8cd66099": "16107ba98f6218c9eb3f62a0a9b3cdda",
".git/objects/22/2fb3da297aa23799258260eb5e5e3d25ac2b53": "9b2694250990b3e8fc221b52e3b3f3dd",
".git/objects/23/1b91f1e184f55cbcb5d23a47d0cdd46399fe10": "9ffd429f9b0fa4f531be00fedcc89abd",
".git/objects/23/235b024d58f154037005b9adf6d1cbc2f11b76": "60058389322b08af88f5c5364685677e",
".git/objects/24/c97bd4f3902fcea3bc0744f95d137b4a6d8dd4": "23cc5af5dc831be872e0bb6ec313eef9",
".git/objects/25/30c9ada09fd638274c2a8ac0456376496387ba": "a8e96cde36c81c0b97fb0bb5539c9fa3",
".git/objects/25/f8d348210803be93fa341024020602b5cc1083": "46768e23f3236abfb37507290af3132f",
".git/objects/26/8df511fffb9ad7550b652a2ebc165834c702b6": "349361940fbcb2922832d37f5e8c99ac",
".git/objects/28/b45ac0ffa4347e55bbd6509e7f9fa98d37ad37": "a0080e30dbd0b88ccd2e2030cf51a03c",
".git/objects/29/4328b4f9a08d26ed513429314cc11bc20d52b3": "c430cbfdbd0df396b12d0203e04474a5",
".git/objects/2c/e8e0604ed48838849c45945ae0ea797555cfdb": "4f6457ff24c293e80cee633aa332616c",
".git/objects/2d/5313bc8d603fd179da87ba335cf1bc832ebee9": "b48f68c1fe725fdb112567b7c3bdf2d7",
".git/objects/2d/e75433927ee126c2bf29de2d06718f81e25f44": "aa1c4ab60215cfd57e7b0420c0999629",
".git/objects/2e/88b86470c6b4a06bfe59061ebcfee85f7c7d14": "41c21585c106614a74821d7c4d6d0673",
".git/objects/30/0e7e14847ab0074a9161362cfaef4d629dcdc4": "f1c505253d89b5e853679dc444e097f0",
".git/objects/32/d8c97ae803866b76b0a2beb6f4eba27fb95156": "e0d7b0ef31ccc7555d16c15090cc41ec",
".git/objects/33/3704a66222a372f5fe5c701a78082b46443c77": "d5ca0e39469a42e3ed3922d2a201174a",
".git/objects/34/a6775951ea7d041d1a1bbefb6a7efdd6c84b71": "9ce135baac0cd0bee21d655f6edddb50",
".git/objects/35/63e3ac2ccccf650c21b9f15b0efe2e147928b7": "bc9f0c7e37d8f8e16f0dffce88105820",
".git/objects/36/57a84bab51c47152ead5afe79d1794dea436f8": "955ec86eddd1354d94caa4bc115605d8",
".git/objects/38/0a909dd94e368ab63693851345e5b82d1b3499": "9818e9df269dc8cf138900f416ca3d09",
".git/objects/3c/ffddf469686949cf49d892590938ae9cb61f87": "ab50c30803c85aa37324b09b3de64bc5",
".git/objects/3d/a80e355535dec72201abed713b409d032728ba": "fc3a348184946f4c77c3b82589f12720",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/db91aabf44f4125e62abca64a482742fb6bd24": "255141925db54678d5f93447276666d6",
".git/objects/49/1b6bae97120200b328fe3fd0cdc2c7e8948ecc": "0844f8480701b1d4280e432d977dd3d4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4d/5c2eee088e0af96dc172146da9a6ee39088e10": "8b69f961ee8155681e6f13382e72893a",
".git/objects/4d/9fa00298a27395f935cd3a2a71a9942a9e360a": "f3a5a3691cfb1c7bdccc6807c7cd7129",
".git/objects/4f/0efb66655b966d5628503c8070b4cac3e78646": "0d1847ea26aa972e38b061819265bdfa",
".git/objects/4f/3686c9229b65b7a5c9453a25548a6a2f6d45f4": "3f2549c5634b801a089cc1703dbeadd5",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/627267280ae9ba57d46b1fee84c3eaa5e0d762": "2ceef1840cc2dca862d6d5a38565abab",
".git/objects/53/6d72366aab71069732694d91ff287efd2cc1db": "902f0df2def795b48500d47363230860",
".git/objects/53/bfc1b8e5a16ec225f8ec72736d9d3787ca8c52": "60193ac49db206a99c5ca4cbafdb066e",
".git/objects/55/11ee6abc143c77f1434b407720854147a86018": "b64253b916c810150e386442c23a8c9a",
".git/objects/55/f0c8554c26c666a90f0ed7025f72c5bb1201e9": "8cc32c20712261da3e7beb71312d3097",
".git/objects/58/a03069ac573b2a3d0f33627e0971bb473d5708": "080d82b2af00b14c211577ba12df6a10",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/7ac29fc66205dae7a6a16a8420ad6d35b4421b": "5b6c12e922493919feaefb04b3ef3edd",
".git/objects/5a/880de67b82aaee09199152f14035a2eab8610c": "ee92c6feb0bfcbfb0bfc5792d5c1b6ae",
".git/objects/5d/9ed88a3e0fcb5bd5ec8dc17dff59f2f6bfd9bf": "9c792a076f1a2f4d79ca0a25d177ef75",
".git/objects/5e/f907a71f85ac651ca34149a76436495ed20fcd": "31ff421d301bf0bd68896790cfedc5a6",
".git/objects/62/71c620c6692f50e1d13d29c5e6a97ca05aa1d2": "772fe39fc8b6a67229e0732f0e277223",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/4db62ca14d9108ec07ab27076d733c7ef91853": "412428738d3e1ad34306f807948e5dc4",
".git/objects/65/81c641277bb659c9113700d4cc87c9716d7485": "56b682a2d68f0b81375f9198be07c8f0",
".git/objects/66/8438472c8de419762a0e02c25b60d857446195": "31e8093a9b244343c2202b35c7596941",
".git/objects/67/662c12435efb7999749473db19e23326981669": "c3300ad689af466735596bf51fd10639",
".git/objects/68/3f552917a342c81a76d8a2458cb8e46b0c5102": "5e734fdcfba37c98f8afcb676151b651",
".git/objects/69/99c59273901144d4813f3ac01484af483b2fb1": "4670ba8b73d00fd38ba2c8013a2989e2",
".git/objects/6a/0f95efd69efdc6ac6e6498a248e6f8a90910cb": "45d23a79fc6ef37f0195aba434cc4785",
".git/objects/6a/48db1384b2aec021b2f5232f8221114d241cd9": "03a3a580006d20b4fa2429e7a3d3b4d8",
".git/objects/6d/a8b5215c8403afeb5b381a69db3b9d92281aa0": "8f578066424d48e850360781bf516191",
".git/objects/6f/e7e6c1954b1e36a9e32affcf1740084a844807": "0a2c7eb8bf1f3bf1ab7006485520cbf5",
".git/objects/70/f66320abe92e594065b9cee7bea7360284502e": "1ee84595b13b1439c7939fc1794534fa",
".git/objects/73/48e8c5e77cd06c6ea92d4cc322a336ab70fee4": "11584eb20be8ca5122fbcf4672c832d5",
".git/objects/75/88f1dfc47c272c41971e58642f5caf59adae80": "710e84809478a228a157a24415671dc7",
".git/objects/76/31c213d13086f6fb088ca1d88b6a68c332210d": "b758c7431d4732393c74a374dada1bc4",
".git/objects/76/ac2bc9bb4f2fe0365f3d4fa7a1bb897a7b62c1": "8a3ed146c39816239ead3d225b6b80d7",
".git/objects/78/739444e8cf0f79fb7ffe42be4cd210eff8e1b9": "47849e78f22db778747171835a558e52",
".git/objects/7b/15edea18fe7eda66bb4e6a4bd35c4ac18329f8": "6180376b9db74264d07ad4070bd6fed9",
".git/objects/7d/8faa13ead10b0cc35c684ce7f888dddddc91a1": "daffc9c49f6ec72944e527a2fc14da2f",
".git/objects/7e/09eee958d602837190dbbf39bfc8c827a609b6": "0a14282ecbd36db159ce2bb537e7259b",
".git/objects/7e/11f9277d46ae458c92f06b77347b1b2fd491a1": "340a67b1e7ccd43bee4094bcababa48b",
".git/objects/80/7bcad3a853dae21a334c3f73c070ba8605eb07": "d33582d5a0e3276d33086140f09d819a",
".git/objects/81/5ccd006f544a2db3becfeb1fd70c1d2aef1ea9": "7a652782bacd31f0e57867d18760ee96",
".git/objects/81/d438ffb79b2f1a723e989535a1a2caf831b710": "c56a8acbc66a89d2b93ff492ba29b536",
".git/objects/82/887e3b442ecfe47b569e19582dfab710a28c84": "11822f8b26a77c67f40d9ba3823ccbda",
".git/objects/86/417fcc1ff8c7c1340c60eaed03fda4ff92e325": "45a7ab5dce183a157326462378264b70",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f71a52e132c45635d747b420df74c06639a20d": "091dae3ec3d87f7cc2a22a98e1277a02",
".git/objects/8a/84d6c5887add2043492a6b80e7de17f788e496": "6d1fc8bb49fded202bfa382c78d58dc8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e2338468ddda6e1b7d5599d5ebb0bf320a86e2": "0b9c9da3382e8a2251d94ede97e743c8",
".git/objects/8b/088cc4326ca1c5797850cf63fc1ff6abbc471d": "b0fc39f489d7c98782c70e485fd47ec6",
".git/objects/8d/8aedcb9495eb20cc778e6998be09638554b8a8": "dc4ef0b1be62e6494f690d3bb871f4db",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/761d8fb73d935057801ee9682295dd6acea439": "16dd2b37b61fead3e35de81a0c9520f5",
".git/objects/90/5a12df7e73084f955bc2cfdadd9acf06a3bfea": "f02c49151217843b4a84cacb6daffdff",
".git/objects/90/e25c42b32a9a3460a98f5f043873013f6f87bc": "a613d3307207a839bf22a6b314df4e70",
".git/objects/93/9c8f2977d922f7f821f7b4714d1ee6c55143df": "5974801f566862b015609f743dc5d535",
".git/objects/9b/719d92c3388bded3015d856bc5ce44142103b2": "43521ed68bc0656674d16178a4a62d4b",
".git/objects/9c/340fbc978c332081930fd03a29ba0b9692fe1e": "cbadaccd03397eb86f7a835533871e1c",
".git/objects/9c/b2261e82d003b92d12cf89a404ac8cb5969783": "176bb52caceda8ed57591327f46e6abc",
".git/objects/9c/c6cfbe28cfba88c3ffcb92f5948f2df8b603f4": "9dfd816c7c16a6acf6582879018bdfac",
".git/objects/9d/0d9ab8094f93bc75d185a83b0a246261828511": "714f01df3c2e1124f7f6e496380c0c11",
".git/objects/9d/e312c6f59bdcb65d3c6ce36a3f84548ab18e11": "cabae63ccfe8671768cae08f7da9840d",
".git/objects/9e/45fd14575cd382de830ce58a70af7d77fec9e0": "c5506493c4b27647dfe11dc34d52085d",
".git/objects/9f/55618762b84c3e74896c918a8de855a73a557b": "9c423ce9cb9b515bb487c1fbe1d3245a",
".git/objects/a0/cc39baa3f3cd8b8ba623835a1f00c25164ecce": "7db2689e922f7ddbbb98251cecb3e760",
".git/objects/a1/9571cc8612c8c3463f3ef8471b4736492266ff": "9ef83fb63da194b13326d9a9d21d9adc",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a6/68024b33af17c4fb5d7e43ccaf80559a1f3bad": "672a23b45b8fd31af4b276ef2afc8f7b",
".git/objects/a8/133eea9cebe28532575abd829de431a5d1121f": "8fd9c00a97a758d935c1bef9fc542508",
".git/objects/a8/5f3c5fa3f632fbf89172a1ac807cca52633412": "e2df5cf25e754da99fa9ca8e1f87b633",
".git/objects/ab/4c35170f988dae246c2cf20b8a6397f802b410": "b3e61274a32ccce4ebf6a9d2a9016719",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/2b3b8a7644fb11aae650d9ddbf15404b641ae5": "2247221869d42af3d60a5f692bab9248",
".git/objects/b1/9a873d508f5ba7fdf5bcb0cf1a71c79ca1ad14": "992626f504b5b7f804f0cf431bb2a90b",
".git/objects/b2/3fd4ef066b659960ce4421a61ade0f72ab28a5": "75d8e6c1b9a66517a5517538ad04337a",
".git/objects/b5/ac8aeaed336bb93301b33f69fcc269cbfcc2df": "43e6b4fdf97a396dadefd0fd63d0baae",
".git/objects/b6/602ab255a1c6f2bc8c2c1a997d7c95ea13f60e": "cfd837e24bfbd657cf5025ca2fce503d",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/12890da225f29c603e3b9718fb6d7c4c5ad22c": "0669dd5730a615a3db716251fcbd94e8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/70dbd33d80a06aca7e39c84fada9e09ea33d1b": "0eb5c95a06dd2c6f3853ea66c8c1c8b2",
".git/objects/bc/eb7e55fc8a82b318ddc797fdc88cf9cb0c65d1": "77ce166391005ba114812633f34d8796",
".git/objects/bd/99d757b1b0a52f2b0fd54e01c8d1b81dabdd17": "a4d24041cef463ab1d78c47aa0949857",
".git/objects/bd/ef6480bc86b9cee90fc1bf33a02539776d3b79": "08531b874b4b4a3bc8f82897b214b265",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/c79dc092eba47265aaa9d1fe4626edd8391fac": "a8965c6033866271f46b3ce7e12f46ec",
".git/objects/bf/0f763ade16e9147efb229f8d9a3c168624860b": "c2d00828bfc93fce7b87f8f899e42178",
".git/objects/bf/843549308f5e0cf56ba671b6720ac9730ad348": "8ee08b0cf60d9edf5d62a35d21ebe47c",
".git/objects/bf/af27b8ed601de051f3b0eee2a794793d59e51b": "57a3f46a6901334f39a74f632b0bb9db",
".git/objects/bf/cc9f6ada43ac104129ddfdaf44aca8e5171777": "f28b2b364860be479587e5a41dc07aa5",
".git/objects/c2/89c5cf1831cafd8ce0a529edb8b6702eeb171e": "1cb1cacf59519e6cd6b4026f5aaa53a1",
".git/objects/c3/407b7e1a38281776253c1896f72e62d6f1cc53": "1809d274e2afd2fe1c8470f46ac71b5b",
".git/objects/c4/c2479579d3722ae84f43f7b5482a2058e1e2bb": "c70b0b56a3f30f35c044cf6afbe388b3",
".git/objects/c4/e21c4f51d5cb7713717bf74de5cbc725afae94": "115969c4f2f9ec42981882ced1367792",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/2dd4f5f416e113b5e1428c72746feaf2170b7a": "9903018d2ef3b6e787b00b1f2f515ed3",
".git/objects/c7/dc6716e71d88c06acc83bec40436476741a551": "bf7f8c6a4116e9558a865770b4d1b23c",
".git/objects/ca/f82a20c012e71aaea46564a011d0104dd156e1": "64ed31552b28e59635a6a4201da1f74b",
".git/objects/cb/234b34d84979c6fe27f3f825a8543a0a77579f": "bec6e4b2f2a7ef111b08e7b14ab18f1b",
".git/objects/cb/f8281e2301567c0fc301eb40fc8e0e65c332da": "2f84c7372bbe76ac5d6fd7e0ac83931d",
".git/objects/cc/6b40dc47ab33d5512292c9ddb50d268c068aba": "31ff27fc267450659cc1ed33cfd309c5",
".git/objects/cf/852636495eb223e1c921d62892e486254b7cc0": "544f0da5c7699e22da704cd5fd1c6e80",
".git/objects/d3/68188b5ff62cc8d24e42cf60ebfada05d193f0": "543f23c29e14cc52f8159bf7f93379e6",
".git/objects/d3/93e1f6d6b2ba8ca7e541b897621aeeb3880b80": "460d6633b9a209b0727f8f3115e98ead",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/9366f1ced027d342f99ef025453d6c33336951": "d7b69c62f0eef6e16c4a0846e08958a0",
".git/objects/d5/56526c2e4f44114ad7adb9682bfe9a0c73716b": "3486801df59f9c831eb782a1eea15eac",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b085fc76a35dea28c11272528744b06d4c345e": "91d5ce4b40f5654307fc3d89efe429e4",
".git/objects/d9/16dc864d2095e06542257026e7e407b76b4e1f": "69b840e1fdd3da2c4ff72e93b3d8065f",
".git/objects/db/1f204c0d33a57a2801ae46a831395d733bfbb3": "cbe285eccfd6ce2944184568b8e2caa3",
".git/objects/db/68e626c33375d32c69de3963fe3522bc607aa8": "d0de6ce12cee1006922e539de8a4dadf",
".git/objects/e2/88ca9866d072a006350b587a7bad153a0ab9ad": "1b87ed6445217e17ba96d372bfeaf2b8",
".git/objects/e4/b87a7df23a06661fda7576d26d8252d0b98798": "20b79e4dfb1db54409b2a477da1f6999",
".git/objects/e5/29f45cfc9153be23567453dd61379cc028b55d": "8e4ec48d233af3677bf5611aff7a3f5b",
".git/objects/e5/561578b8659f64d838b0ddd36e49b58cbd0d78": "2a246bcec0f94477ace8264209e50e09",
".git/objects/e5/f9147970039b22ffb553df01e07be76b755df7": "e5fadebfad4bdff35c7a3d3f8b4d6481",
".git/objects/e6/966d6e18d2d854fee398ccad2ec37a85127e12": "33f4c62762faedd3ed21ccb6d4ced2cc",
".git/objects/e8/b2eff7092c5fa45e86a564f52b90020023f312": "4815d996c1a8b740a43f859dd8aed10a",
".git/objects/e9/ce018e8836769d80676e89fbbfdbb716e923ed": "4b384534d5f3a560249323bb75b044cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/847b31ca732c7dc4ecd972e5fbff2d330f602f": "bc0fbb940a7c6109d18f2f91e7a04a8d",
".git/objects/ee/cc2b9bc1053b8eb76d31d1517776a11bebc06e": "48de619690fc8602fe4211e3c6717276",
".git/objects/ee/ce96e7a8c916ca851ee8769bc7e03e89d92419": "5177e37556942de426b880e9bbcaea39",
".git/objects/ee/df68aa87f1e8167da8bb0c845ed2c4db19b309": "3806e5acdd09b0a2849c3845bbbe8f02",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/d7530fee2c461a83c92459b74b3de5487aef6e": "ca5daa137202c57ae5099b8b22d2c156",
".git/objects/f3/1bddd73566bf9d14b05c776c0877b55b4c31d5": "24c70e360d80cd87dbaf4b675779cf6e",
".git/objects/f5/84cd7e62e08a61e28a46e6adfa2450c5dae537": "025598332ad90f5c426d3e70acd8499a",
".git/objects/f6/c6a43ba7fb87a5b643a3698d079638b782e542": "1e3cc9cb8107d5ad99189072cdb88762",
".git/objects/f7/0ac6868e793668b86b58e7d5dabaa6c4ecb211": "c3a596d19ea9a2663f278dcb109d4fd6",
".git/objects/f7/7f7e22c612d9377a5075b0f8f3ff5c0f6d37d7": "186d3ded885f6e99b227113e2a212df4",
".git/objects/f8/28d3814a590b4c4726b4930595ab3d4b319acb": "b37cb9e15c2ca868e2b1f695cdf0dc6e",
".git/objects/f8/4d05281f7b006e71e81db5c481fb7dd75da47e": "d42f7967a61e84a8f76eafbeb8a9f356",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fa/e62efb01e29e37d9cc64fdd6d011122639ab7d": "28d34521f9947d3619912d406aeab5eb",
".git/objects/fb/8a3f03c5e423c2e72e9be1be91a3a5bd093be3": "0c9c31bb58f49662cf335d2e79fcdd95",
".git/objects/fc/1c0cc143fe560dea5ed6ca7d6b574338b9dd05": "35eda3ddc5721b2da0d37a7e75b6e172",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/4f021027981a6aae6659efbf4789d4294546b2": "444c5142e07f15ece1cb763b80b5e8cd",
".git/objects/fe/dc55bc00fd21e50ea4c128c11a2f1e177e85e4": "fa49d5e2b59fdc6ca10ee4743d342fba",
".git/objects/pack/pack-e760c572a165d61f2ba67b896d060fdc0c1fbb16.idx": "0d92cb04e1458fa4727ea005aba3faae",
".git/objects/pack/pack-e760c572a165d61f2ba67b896d060fdc0c1fbb16.pack": "5233bf3cfaf057b924051daae03357b7",
".git/refs/heads/main": "bdc3fae7c7b2833ae2ba29a94d305a7c",
".git/refs/remotes/origin/main": "bdc3fae7c7b2833ae2ba29a94d305a7c",
"assets/AssetManifest.bin": "bb5e4370813dced13cfc98fa4e5e3b36",
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
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "29dcd25724a1eab1a2b5789cfcd7c83e",
"icons/Icon-512.png": "8edcd81b445a93ba3b7e47cbaf9ae774",
"icons/Icon-maskable-192.png": "29dcd25724a1eab1a2b5789cfcd7c83e",
"icons/Icon-maskable-512.png": "8edcd81b445a93ba3b7e47cbaf9ae774",
"index.html": "9159a17ed7e4081274463d9e59e89349",
"/": "9159a17ed7e4081274463d9e59e89349",
"main.dart.js": "1b21b67a15bf44334cfbee9efe35f8ed",
"manifest.json": "b9f746920ef7eb4245e2f7268a07cb41",
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
