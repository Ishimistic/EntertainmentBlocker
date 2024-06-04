'use strict';

chrome.webRequest.onBeforeRequest.addListener(
    function(detals) {return  {cancel : true}},
    {urls : ["*://*.netflix.com/*", "*://*.fmoviesz.to/*", "*://*.hotstar.com/*", "*://*.jiocinema.com/*", "*://*.primevideo.com/*", "*://*.sonyliv.com/*", "*://*.amazon.in/minitv/*","*://*.zee5.com/*", "*://aniwave.to/*", "*://w7.animeland.tv/*", "*://*.animeout.xyz/*","*://animeultima.su/*" ]},
    ["blocking"]
)