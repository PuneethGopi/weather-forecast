"use strict";var precacheConfig=[["/weather-forecast/index.html","ccd5c532880a910a1adb236509b3d6bd"],["/weather-forecast/static/css/main.e4f37998.css","30b39571e8d6e2441c47a1b9dd5269ea"],["/weather-forecast/static/js/main.7df3115b.js","103e3ac075399035bf886227399a3031"],["/weather-forecast/static/media/01d.6c4bb184.svg","6c4bb1844c5b2920ee73176e5ab1d385"],["/weather-forecast/static/media/01n.a6499b66.svg","a6499b66d83a96c544b711d44f182751"],["/weather-forecast/static/media/02d.6dfb9c91.svg","6dfb9c9146264235ef60b13d5fe34735"],["/weather-forecast/static/media/02n.3ec36121.svg","3ec36121a662497ad9d3443b3c3318a8"],["/weather-forecast/static/media/03d.3ec36121.svg","3ec36121a662497ad9d3443b3c3318a8"],["/weather-forecast/static/media/03n.3ec36121.svg","3ec36121a662497ad9d3443b3c3318a8"],["/weather-forecast/static/media/04d.66ab101d.svg","66ab101d6eaf30610dec22bc6fa0dae9"],["/weather-forecast/static/media/04n.66ab101d.svg","66ab101d6eaf30610dec22bc6fa0dae9"],["/weather-forecast/static/media/09d.29087c87.svg","29087c877bf7a94e75010eb68a9fb230"],["/weather-forecast/static/media/09n.29087c87.svg","29087c877bf7a94e75010eb68a9fb230"],["/weather-forecast/static/media/10d.d73e7100.svg","d73e7100e67a2fb0e0c3794b174ba7a5"],["/weather-forecast/static/media/10n.29087c87.svg","29087c877bf7a94e75010eb68a9fb230"],["/weather-forecast/static/media/11d.008f23e5.svg","008f23e5dfa9bb87423cc866d6ab1d06"],["/weather-forecast/static/media/11n.008f23e5.svg","008f23e5dfa9bb87423cc866d6ab1d06"],["/weather-forecast/static/media/13d.daf7601a.svg","daf7601a4d25f7e6fe6340fbc1693121"],["/weather-forecast/static/media/13n.daf7601a.svg","daf7601a4d25f7e6fe6340fbc1693121"],["/weather-forecast/static/media/50d.53be57c3.svg","53be57c3260d0e70be36ce71e6f3849d"],["/weather-forecast/static/media/50n.53be57c3.svg","53be57c3260d0e70be36ce71e6f3849d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/weather-forecast/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});