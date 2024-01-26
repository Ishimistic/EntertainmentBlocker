'use strict';

chrome.webRequest.onBeforeRequest.addListener(
    function(detals) {return  {cancel : true}},
    {urls : ["*://*.netflix.com/*", "*://*.fmoviesz.to/*"]},
    ["blocking"]
)