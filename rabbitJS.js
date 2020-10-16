// ==UserScript==
// @name         RabbitDECRYPT
// @version      0.1
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.2.1/rabbit.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.2.1/cipher-core.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.2.1/crypto-js.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.2.1/crypto-js.min.js.map
// @match        http://htmlpreview.github.io/?https://github.com/Espur1o/Tarea3Cripto/blob/main/index.html
// @description  try to take over the world!
// updateURL
// @author       You
// @grant        none
// ==/UserScript==


var encrypted = CryptoJS.Rabbit.encrypt("Oh dear! Oh dear! I shall be late!", "Secret Passphrase","hola")
    console.log(encrypted);
    var decrypted = CryptoJS.Rabbit.decrypt(encrypted,"Secret Passphrase",'hola');
    console.log(encrypted);
    console.log(decrypted)
