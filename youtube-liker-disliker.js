// ==UserScript==
// @name         YouTube Liker/Disliker
// @namespace    https://www.jonathansharman.com/
// @version      0.2
// @description  Like with '[', dislike with ']'.
// @author       Jonathan Sharman
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

"use strict";

document.addEventListener("keyup", function (event) {
    if (event.key === "[") {
        event.preventDefault();
        document.querySelector("like-button-view-model button").click()
    } else if (event.key === "]") {
        event.preventDefault();
        document.querySelector("dislike-button-view-model button").click()
    }
});
