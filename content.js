console.log("hello from hydra");

var opened = false;
var timeout = -1;

function hydra() {
    var as = document.querySelectorAll("div[data-hveid] > h3 > a");
    if (as.length === 0) {
        return;
    }
    opened = true;
    var firstWin = null;
    for (var i = 0; i < Math.min(3, as.length); i++) {
        if (i === 0) {
            var href = as[i].getAttribute("href");
            var win = window.open(href, "_blank");
        } else {
            var a = as[i];
            var evt = document.createEvent("MouseEvents");
            //the tenth parameter of initMouseEvent sets ctrl key
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                               true, false, false, false, 0, null);
            a.dispatchEvent(evt);
        }
    }
    clearTimeout(timeout);
}

timeout = setInterval(hydra, 50);
window.onload = hydra();
