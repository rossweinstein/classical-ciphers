///<reference types="webpack-env" />

var styles = require('../css/application.css');


const cipherType = <HTMLInputElement>document.getElementById('selectCipher');
const keyPlaceholder = <HTMLInputElement>document.getElementById('key');

cipherType.addEventListener('change', () => {
    const selection: string = cipherType.value;

    if (selection == 'Caesar') {
        keyPlaceholder.value = '';
        keyPlaceholder.placeholder = "Enter A Number";
        keyPlaceholder.maxLength = 3;
       
    } else {
    
        keyPlaceholder.value = '';
        keyPlaceholder.placeholder = "Enter Keyword";
        keyPlaceholder.maxLength = 10;
           
        
    }
});


if (module.hot) {
    module.hot.accept();
}
