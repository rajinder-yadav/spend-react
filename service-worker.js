"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/spend-react/index.html","6b5170d888969712de4808adf3a73417"],["/spend-react/static/css/main.9484e149.css","589a0f5fa2614fe54ba352ab32a5903b"],["/spend-react/static/js/main.b54e138c.js","1425be7fa044e91ca2508cf8fd2c597e"],["/spend-react/static/media/accountant-icon.f7025294.png","f70252944cd1e55a6986796435aaf2e0"],["/spend-react/static/media/business-icon.b063f0ae.png","b063f0aeef440d5540bad87c55acc851"],["/spend-react/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/spend-react/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/spend-react/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/spend-react/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/spend-react/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/spend-react/static/media/landing-main.e2f9bf9d.png","e2f9bf9d57a3a0af0830c6e3beec77e0"],["/spend-react/static/media/mobile-1.b24730c2.png","b24730c25592b9eacf3c756608e167a8"],["/spend-react/static/media/mobile-2.f0a30014.png","f0a30014b1c20b15a8f7cb2eabb60900"],["/spend-react/static/media/mobile-robot.ea97030e.png","ea97030e59c44a7a4b14f4a84f497cbd"],["/spend-react/static/media/raj.70cac99a.jpeg","70cac99a45156b725691f1da4799bcc0"],["/spend-react/static/media/spend-flow.5b9990e2.png","5b9990e292136b4a75871fb395b4b4c5"],["/spend-react/static/media/spend-robot-signup.5eb5387d.png","5eb5387da3a05e18a20ba02e38df9279"],["/spend-react/static/media/spend-robot.9e28a1d8.png","9e28a1d8a7a39e853f01de5289806d60"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/spend-react/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});