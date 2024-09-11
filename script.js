// ==UserScript==
// @name         DontFollow for Linkedin
// @namespace    https://github.com/ketan-16/dontfollow-for-linkedin
// @version      0.1a
// @description  Unticks the annoying "Follow company for more updates" in the final Easy Apply modal.
// @author       Ketan Yadav
// @match        https://www.linkedin.com/jobs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    console.log("[USERSCRIPT]: DontFollow for LinkedIn Started!")
    const uncheckFollowCompany = () => {
        // Get all elements with the same ID
        const elements = document.querySelectorAll('#follow-company-checkbox');
        elements.forEach((element) => {
            // Check if the element is an input checkbox
            if (element.tagName === 'INPUT' && element.type === 'checkbox') {
                if (element.checked) {
                    element.checked = false; // Uncheck it
                    console.log("[USERSCRIPT]: Element Unchecked!")
                }
            }
        });
    };

    // Check every second for the checkbox
    const interval = setInterval(uncheckFollowCompany, 1000);

})()
