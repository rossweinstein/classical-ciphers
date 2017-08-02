!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.separateCharacters=function(e,t){for(var r=[],n=0;n<e.length;n++){var o=r[n%t];r[n%t]=null==o?e.charAt(n).toLowerCase():o+e.charAt(n).toLowerCase(),console.log(r)}return r},e.prototype.findTheOrder=function(e,t){for(var r=[],n=0;n<e.length;n++)for(var o=0;o<t.length;o++)t[n]==e[o]&&r.push(o);return r},e.prototype.columnOrder=function(e){var t=this.getKeyAsNumberArray(e),r=t.slice(),n=this.sortKeyInAscendingOrder(t);return this.findTheOrder(r,n)},e.prototype.getKeyAsNumberArray=function(e){return e.toLowerCase().split("").map(function(e){return e.charCodeAt(0)})},e.prototype.sortKeyInAscendingOrder=function(e){return e.sort(function(e,t){return e-t})},e}();t.ColumnarCipher=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.converStringToNumberArray=function(e){return e.split("").map(function(e){return e.charCodeAt(0)-32})},e.prototype.convertNumberArrayToString=function(e){return e.map(function(e){return String.fromCharCode(e+32)}).join("")},e.prototype.isValidNumericKey=function(e){return!isNaN(Number(e))},e.prototype.shiftNumberArray=function(e,t){var r=this;return e.map(function(e){return r.shiftAsciiValue(e,t)})},e.prototype.shiftAsciiValue=function(e,t){return e+t>=0?this.positiveAsciiShift(e,t):this.negativeAsciiShift(e,t)},e.prototype.positiveAsciiShift=function(e,t){return(e+t)%95},e.prototype.negativeAsciiShift=function(e,t){return(e+t)%95==0?0:95- -(e+t)%95},e}();t.CaesarCipher=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(4),i=r(8);r(11);var u=document.getElementById("key"),c=document.getElementById("selectCipher"),a=document.getElementById("button"),p=document.getElementsByClassName("cipherTextArea")[0],s=document.getElementById("cipherOutput"),l=new i.cipherForm;l.validateForm(c,u,a),l.ensureCorrectPlaceholder(c,u);var f=new o.CipherController;a.addEventListener("click",function(){if(0==a.disabled){var e=p.value,t=document.getElementById("encryptDecrypt"),r="Encrypt"==t.value;s.innerHTML=r?f.encrypt(e,u.value,c.value):f.decrypt(e,u.value,c.value)}});var h=new n.ColumnarCipherDecoder;console.log(h.getColumnLengths("message","3"))},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(e,t){return""},t.prototype.getColumnLengths=function(t,r){var n=e.prototype.separateCharacters.call(this,t,r.length),o=[];console.log(n.length);for(var i=0;i<n.length;i++)o.push(n[i].length);return o},t}(o.ColumnarCipher);t.ColumnarCipherDecoder=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),o=r(6),i=r(7),u=function(){function e(){}return e.prototype.encrypt=function(e,t,r){var n=this.getCipherType(r);return n!=c.EMPTY?this.encryptTheText(e,t,n):"ERROR: Invalid Cipher Type"},e.prototype.encryptTheText=function(e,t,r){return p.createCipher(r,a.Encrypt).performCipher(e,t)},e.prototype.decrypt=function(e,t,r){var n=this.getCipherType(r);return n!=c.EMPTY?this.decryptTheText(e,t,n):"ERROR: Invalid Cipher Type"},e.prototype.decryptTheText=function(e,t,r){return p.createCipher(r,a.Decrypt).performCipher(e,t)},e.prototype.getCipherType=function(e){return"Caesar"==e?c.Caesar:"Columnar"==e?c.Columnar:"Vigenere"==e?c.Vigenere:c.EMPTY},e}();t.CipherController=u;var c;!function(e){e[e.Caesar=0]="Caesar",e[e.Columnar=1]="Columnar",e[e.Vigenere=2]="Vigenere",e[e.EMPTY=3]="EMPTY"}(c||(c={}));var a;!function(e){e[e.Encrypt=0]="Encrypt",e[e.Decrypt=1]="Decrypt"}(a||(a={}));var p=function(){function e(){}return e.createCipher=function(t,r){return t==c.Caesar?e.createCeasarCipher(r):t==c.Columnar?e.createColumnarCipher(r):e.createVigenereCipher(r)},e.createCeasarCipher=function(e){return e==a.Encrypt?new o.CaesarCipherEncoder:new i.CaesarCipherDecoder},e.createColumnarCipher=function(e){return e==a.Encrypt?new n.ColumnarCipherEncoder:new i.CaesarCipherDecoder},e.createVigenereCipher=function(e){return e==a.Encrypt?new o.CaesarCipherEncoder:new i.CaesarCipherDecoder},e}()},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(e,t){var r=this.separateCharacters(e,t.length),n=this.columnOrder(t);return this.formCipher(r,n)},t.prototype.formCipher=function(e,t){for(var r="",n=0;n<t.length;n++)r+=e[t[n]];return r},t}(o.ColumnarCipher);t.ColumnarCipherEncoder=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(t,r){return e.prototype.isValidNumericKey.call(this,r)?this.encodeText(t,Number(r)):"Invalid Key: Key Must Be Numeric"},t.prototype.encodeText=function(t,r){var n=e.prototype.converStringToNumberArray.call(this,t),o=e.prototype.shiftNumberArray.call(this,n,r);return e.prototype.convertNumberArrayToString.call(this,o)},t}(o.CaesarCipher);t.CaesarCipherEncoder=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(t,r){return e.prototype.isValidNumericKey.call(this,r)?this.decodeText(t,Number(r)):"Invalid Key: Key Must Be Numeric"},t.prototype.decodeText=function(t,r){var n=e.prototype.converStringToNumberArray.call(this,t),o=e.prototype.shiftNumberArray.call(this,n,-r);return e.prototype.convertNumberArrayToString.call(this,o)},t}(o.CaesarCipher);t.CaesarCipherDecoder=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),o=r(10),i=function(){function e(){this.form=new o.FormValidation,this.modifyText=new n.ModifyKeyInputElement}return e.prototype.validateForm=function(e,t,r){var n=this;t.addEventListener("blur",function(){r.disabled=n.form.disableButton(e.value,t.value)})},e.prototype.ensureCorrectPlaceholder=function(e,t){var r=this;e.addEventListener("change",function(){r.modifyText.correctPlaceholder(e.value,t)})},e}();t.cipherForm=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.correctPlaceholder=function(e,t){"Caesar"==e?this.caesarPlaceholder(t):this.keywordPlaceholder(t)},e.prototype.caesarPlaceholder=function(e){this.placeholderReset(e,"Enter A Number",3)},e.prototype.keywordPlaceholder=function(e){this.placeholderReset(e,"Enter A Keyword",10)},e.prototype.placeholderReset=function(e,t,r){e.value="",e.placeholder=t,e.maxLength=r},e}();t.ModifyKeyInputElement=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.disableButton=function(e,t){return"Caesar"==e?this.isInvalidNumberKey(t):this.isInvalidKeyword(t)},e.prototype.isInvalidNumberKey=function(e){return isNaN(Number(e))},e.prototype.isInvalidKeyword=function(e){var t=this;return this.converStringToNumberArray(e).filter(function(e){return t.isValidLetter(e)}).length!=e.length},e.prototype.converStringToNumberArray=function(e){return e.split("").map(function(e){return e.charCodeAt(0)})},e.prototype.isValidLetter=function(e){return this.isValidUpperCaseLetter(e)||this.isValidLowerCaseLetter(e)},e.prototype.isValidUpperCaseLetter=function(e){return e>=65&&e<=90},e.prototype.isValidLowerCaseLetter=function(e){return e>=97&&e<=122},e}();t.FormValidation=n},function(e,t){}]);