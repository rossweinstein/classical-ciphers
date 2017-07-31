var styles = require('../css/application.css');

console.log("hi");

var theApp = document.getElementById("app");
theApp.innerHTML = "It Works";

if (module.hot) {
    const hotEmitter = require("webpack/hot/emitter");
    const DEAD_CSS_TIMEOUT = 2000;

    hotEmitter.on("webpackHotUpdate", function(currentHash) {
        document.querySelectorAll("link[href][rel=stylesheet]").forEach((link) => {
            const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
            const newLink = link.cloneNode();
            newLink.href = nextStyleHref;

            link.parentNode.appendChild(newLink);
            setTimeout(() => {
                link.parentNode.removeChild(link);
            }, DEAD_CSS_TIMEOUT);
        });
    })
}
