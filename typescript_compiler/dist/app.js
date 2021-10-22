"use strict";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("Clicked! " + message);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", clickHandler.bind(null, "Binded null this!"));
//# sourceMappingURL=app.js.map