///<reference types="webpack-env" />

var styles = require('../css/application.css');

console.log("hi");

var theApp = document.getElementById("app");
theApp.innerHTML = "It Works";

if (module.hot) {
    module.hot.accept();
}
