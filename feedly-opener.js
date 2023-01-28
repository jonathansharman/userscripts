// ==UserScript==
// @name         Feedly Opener
// @namespace    https://www.jonathansharman.com/
// @version      0.4
// @description  On enter press, opens the first item in a feed, marks it read, and hides it. Hold Ctrl to open three items at once.
// @author       Jonathan Sharman
// @match        https://feedly.com/i/collection/content/user/*
// @grant        none
// ==/UserScript==

"use strict";

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const entries = document.getElementsByClassName("entry");
        let n = Math.min(entries.length, event.ctrlKey ? 3 : 1);
        for (let i = 0; i < n; ++i) {
            const url = entries[i].getElementsByTagName("a")[0].href;
            window.open(url, "_blank");
        }
        for (let i = n - 1; i >= 0; --i) {
            entries[i].getElementsByClassName("EntryHideButton")[0].click();
        }
    }
});