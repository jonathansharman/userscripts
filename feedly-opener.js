// ==UserScript==
// @name         Feedly Opener
// @namespace    https://www.jonathansharman.com/
// @version      0.7.2
// @description  On enter press, opens the first feed item and hides its card.
// @author       Jonathan Sharman
// @match        https://feedly.com/i/collection/content/user/*
// @grant        none
// ==/UserScript==

"use strict";

document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const entry = document.querySelector(".entry");
        const link = entry.querySelector("a");
        window.open(link.href, "_blank");
        link.click();
        waitForElement('.SidePeekCloseTab div').then(closeButton => {
            closeButton.click();
            waitForElement('.EntryRemoveButton').then(removeButton => {
                removeButton.click();
            });
        });
    }
});

// https://stackoverflow.com/a/61511955
function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
