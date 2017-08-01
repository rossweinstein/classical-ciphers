///<reference types="webpack-env" />

var styles = require('../css/application.css');

import { CaesarCipherDecoder } from './Ciphers/Caesar/CaesarCipherDecoder';
import { CaesarCipherEncoder } from './Ciphers/Caesar/CaesarCipherEncoder';
import { ICipher } from './Ciphers/ICipher';


console.log("hi");

var theApp = document.getElementById("app");
theApp.innerHTML = "It Works";

const myName = "Ross Weinstein";

console.log(myName);

const caesarEncoder: ICipher = new CaesarCipherEncoder();
const encodedName: string = caesarEncoder.performCipher(myName, "150");

console.log(encodedName);

const caesarDecoder: ICipher = new CaesarCipherDecoder();
const decodedName: string = caesarDecoder.performCipher(encodedName, "150");

console.log(decodedName);

if (module.hot) {
    module.hot.accept();
}
