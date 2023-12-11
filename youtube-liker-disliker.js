// ==UserScript==
// @name         YouTube Liker/Disliker
// @namespace    https://www.jonathansharman.com/
// @version      0.1
// @description  Like with '[', dislike with ']'.
// @author       Jonathan Sharman
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

"use strict";

document.addEventListener("keyup", function (event) {
    if (event.key === "[") {
        event.preventDefault();
        let button = document.querySelector("button[title='I like this']")
            ?? document.querySelector("button[title='Unlike']");
        button.click()
    } else if (event.key === "]") {
        event.preventDefault();
        document.querySelector("button[title='I dislike this']").click()
    }
});
