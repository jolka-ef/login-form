!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){const t=e.target;if(t.matches('[href*="Form"]')){e.preventDefault();const r=t.getAttribute("href");t.closest(".Form").classList.toggle("Form--hidden");const n=document.querySelector(r);n.classList.toggle("Form--hidden"),n.reset()}}function o(e){const t=e.closest(".InputContainer").querySelector(".InputErrMsg"),r=e.getAttribute("name");e.setAttribute("aria-invalid","true"),e.setAttribute("aria-describedby",r+"ErrMsg"),e.classList.add("Input--hasError"),t.setAttribute("id",r+"ErrMsg")}function i(e){"function"==typeof e.showModal?e.showModal():alert("The <dialog> API is not supported by this browser")}r.r(t),[...document.getElementsByClassName("Form--novalidate")].forEach(e=>e.setAttribute("novalidate","")),document.addEventListener("blur",(function(e){const t=e.target;t.matches(":invalid:not(.Input--hasError)")&&o(t),t.matches(".Input--hasError:valid")&&function(e){const t=e.closest(".InputContainer").querySelector(".Input-errMsg");e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),e.classList.remove("Input--hasError"),t&&t.removeAttribute("id")}(t)}),!0),document.addEventListener("submit",(function(e){e.preventDefault();const t=e.target,r=t.querySelector(":invalid");r?(t.querySelectorAll(":required:invalid:not(.Input--hasError)").forEach(e=>o(e)),r.focus()):"loginForm"===t.getAttribute("id")?i(document.querySelector('[id="successDialog"]')):i(document.querySelector('[id="resetDialog"]'))}),!1),document.addEventListener("click",n,!1),document.addEventListener("touchend",n,!1)}]);
//# sourceMappingURL=main.js.map