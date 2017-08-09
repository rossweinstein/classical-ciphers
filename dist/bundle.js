!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(e,t){return this.keyValidator.isValidKeyword(t)?this.decodeText(e,t):"Invalid Key: Must Be Alphabetic"},t.prototype.decodeText=function(t,r){var n=this.getColumnLengths(t,r),o=e.prototype.columnOrder.call(this,r),i=this.rebuildCipherColumns(t,n,o);return this.decryption(i,r.length)},t.prototype.rebuildCipherColumns=function(e,t,r){for(var n=[],o=e,i=0;i<t.length;i++){var u=r[i],c=t[u];n[i]=o.substr(0,c),o=o.substr(c)}return this.orderColumnsCorrectly(n,r)},t.prototype.orderColumnsCorrectly=function(e,t){for(var r=[],n=0;n<e.length;n++)r.push(e[t[n]]);return r},t.prototype.getColumnLengths=function(t,r){for(var n=e.prototype.separateCharacters.call(this,t,r.length),o=[],i=0;i<n.length;i++)o.push(n[i].length);return o},t.prototype.decryption=function(e,t){for(var r="",n=this.findTextLengthFromColumns(e),o=0,i=0;i<n;i++)r+=e[i%t].charAt(o),i%t==t-1&&o++;return r},t.prototype.findTextLengthFromColumns=function(e){return e.map(function(e){return e.length}).reduce(function(e,t){return e+t})},t}(o.ColumnarCipher);t.ColumnarCipherDecoder=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=function(){function e(){this.keyValidator=new n.ValidateKeyword}return e.prototype.separateCharacters=function(e,t){for(var r=[],n=0;n<e.length;n++){var o=r[n%t];r[n%t]=null==o?e.charAt(n):o+e.charAt(n)}return r},e.prototype.findTheOrder=function(e,t){for(var r=[],n=0;n<e.length;n++)r.push(t.indexOf(e[n]));return r},e.prototype.columnOrder=function(e){var t=this.getKeyAsNumberArray(e),r=this.sortKeyInAscendingOrder(t);return this.findTheOrder(t,r)},e.prototype.getKeyAsNumberArray=function(e){return e.toLowerCase().split("").map(function(e){return e.charCodeAt(0)})},e.prototype.sortKeyInAscendingOrder=function(e){return e.slice().sort(function(e,t){return e-t})},e}();t.ColumnarCipher=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.converStringToNumberArray=function(e){return e.split("").map(function(e){return e.charCodeAt(0)-32})},e.prototype.convertNumberArrayToString=function(e){return e.map(function(e){return String.fromCharCode(e+32)}).join("")},e.prototype.isValidNumericKey=function(e){return!isNaN(Number(e))},e.prototype.shiftNumberArray=function(e,t){var r=this;return e.map(function(e){return r.shiftAsciiValue(e,t)})},e.prototype.shiftAsciiValue=function(e,t){return e+t>=0?this.positiveAsciiShift(e,t):this.negativeAsciiShift(e,t)},e.prototype.positiveAsciiShift=function(e,t){return(e+t)%95},e.prototype.negativeAsciiShift=function(e,t){return(e+t)%95==0?0:95- -(e+t)%95},e}();t.CaesarCipher=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(5),i=r(9);r(12);var u=document.getElementById("key"),c=document.getElementById("selectCipher"),a=document.getElementById("button"),p=document.getElementsByClassName("cipherTextArea")[0],s=document.getElementById("cipherOutput"),l=new i.cipherForm;l.validateForm(c,u,a),l.ensureCorrectPlaceholder(c,u);var f=new o.CipherController;a.addEventListener("click",function(){if(0==a.disabled){var e=p.value,t=document.getElementById("encryptDecrypt"),r="Encrypt"==t.value;s.innerHTML=r?f.encrypt(e,u.value,c.value):f.decrypt(e,u.value,c.value)}});var h=new n.ColumnarCipherDecoder,y=h.performCipher("hmaht s esseriege","newt");console.log(y)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.isValidKeyword=function(e){var t=this;return this.converStringToNumberArray(e).filter(function(e){return t.isValidLetter(e)}).length==e.length},e.prototype.converStringToNumberArray=function(e){return e.split("").map(function(e){return e.charCodeAt(0)})},e.prototype.isValidLetter=function(e){return this.isValidUpperCaseLetter(e)||this.isValidLowerCaseLetter(e)},e.prototype.isValidUpperCaseLetter=function(e){return e>=65&&e<=90},e.prototype.isValidLowerCaseLetter=function(e){return e>=97&&e<=122},e}();t.ValidateKeyword=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(6),i=r(7),u=r(8),c=function(){function e(){}return e.prototype.encrypt=function(e,t,r){var n=this.getCipherType(r);return n!=a.EMPTY?this.encryptTheText(e,t,n):"ERROR: Invalid Cipher Type"},e.prototype.encryptTheText=function(e,t,r){return s.createCipher(r,p.Encrypt).performCipher(e,t)},e.prototype.decrypt=function(e,t,r){var n=this.getCipherType(r);return n!=a.EMPTY?this.decryptTheText(e,t,n):"ERROR: Invalid Cipher Type"},e.prototype.decryptTheText=function(e,t,r){return s.createCipher(r,p.Decrypt).performCipher(e,t)},e.prototype.getCipherType=function(e){return"Caesar"==e?a.Caesar:"Columnar"==e?a.Columnar:a.EMPTY},e}();t.CipherController=c;var a;!function(e){e[e.Caesar=0]="Caesar",e[e.Columnar=1]="Columnar",e[e.EMPTY=2]="EMPTY"}(a||(a={}));var p;!function(e){e[e.Encrypt=0]="Encrypt",e[e.Decrypt=1]="Decrypt"}(p||(p={}));var s=function(){function e(){}return e.createCipher=function(t,r){return t==a.Caesar?e.createCeasarCipher(r):e.createColumnarCipher(r)},e.createCeasarCipher=function(e){return e==p.Encrypt?new i.CaesarCipherEncoder:new u.CaesarCipherDecoder},e.createColumnarCipher=function(e){return e==p.Encrypt?new o.ColumnarCipherEncoder:new n.ColumnarCipherDecoder},e}()},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(e,t){return this.keyValidator.isValidKeyword(t)?this.encodeText(e,t):"Invalid Key: Must Be Alphabetic"},t.prototype.encodeText=function(e,t){var r=this.separateCharacters(e,t.length),n=this.columnOrder(t);return this.formCipher(r,n)},t.prototype.formCipher=function(e,t){for(var r="",n=0;n<t.length;n++)r+=e[t[n]];return r},t}(o.ColumnarCipher);t.ColumnarCipherEncoder=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(t,r){return e.prototype.isValidNumericKey.call(this,r)?this.encodeText(t,Number(r)):"Invalid Key: Key Must Be Numeric"},t.prototype.encodeText=function(t,r){var n=e.prototype.converStringToNumberArray.call(this,t),o=e.prototype.shiftNumberArray.call(this,n,r);return e.prototype.convertNumberArrayToString.call(this,o)},t}(o.CaesarCipher);t.CaesarCipherEncoder=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=function(e){function t(){return e.call(this)||this}return n(t,e),t.prototype.performCipher=function(t,r){return e.prototype.isValidNumericKey.call(this,r)?this.decodeText(t,Number(r)):"Invalid Key: Key Must Be Numeric"},t.prototype.decodeText=function(t,r){var n=e.prototype.converStringToNumberArray.call(this,t),o=e.prototype.shiftNumberArray.call(this,n,-r);return e.prototype.convertNumberArrayToString.call(this,o)},t}(o.CaesarCipher);t.CaesarCipherDecoder=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),o=r(11),i=function(){function e(){this.form=new o.FormValidation,this.modifyText=new n.ModifyKeyInputElement}return e.prototype.validateForm=function(e,t,r){var n=this;t.addEventListener("blur",function(){r.disabled=n.form.disableButton(e.value,t.value)})},e.prototype.ensureCorrectPlaceholder=function(e,t){var r=this;e.addEventListener("change",function(){r.modifyText.correctPlaceholder(e.value,t)})},e}();t.cipherForm=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.correctPlaceholder=function(e,t){"Caesar"==e?this.caesarPlaceholder(t):this.keywordPlaceholder(t)},e.prototype.caesarPlaceholder=function(e){this.placeholderReset(e,"Enter A Number",3)},e.prototype.keywordPlaceholder=function(e){this.placeholderReset(e,"Enter A Keyword",10)},e.prototype.placeholderReset=function(e,t,r){e.value="",e.placeholder=t,e.maxLength=r},e}();t.ModifyKeyInputElement=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.disableButton=function(e,t){return"Caesar"==e?this.isInvalidNumberKey(t):this.isInvalidKeyword(t)},e.prototype.isInvalidNumberKey=function(e){return isNaN(Number(e))},e.prototype.isInvalidKeyword=function(e){var t=this;return this.converStringToNumberArray(e).filter(function(e){return t.isValidLetter(e)}).length!=e.length},e.prototype.converStringToNumberArray=function(e){return e.split("").map(function(e){return e.charCodeAt(0)})},e.prototype.isValidLetter=function(e){return this.isValidUpperCaseLetter(e)||this.isValidLowerCaseLetter(e)},e.prototype.isValidUpperCaseLetter=function(e){return e>=65&&e<=90},e.prototype.isValidLowerCaseLetter=function(e){return e>=97&&e<=122},e}();t.FormValidation=n},function(e,t){}]);