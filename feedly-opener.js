// ==UserScript==
// @name         Feedly Opener
// @namespace    https://www.jonathansharman.com/
// @version      0.7
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
        setTimeout(function () {
            document.querySelector('.SidePeekCloseTab button').click();
            setTimeout(function () {
                document.querySelector('.EntryRemoveButton').click();
            });
        });
    }
});
