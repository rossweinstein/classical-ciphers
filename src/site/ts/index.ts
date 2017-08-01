import { cipherForm } from './formValidation/controller/cipherFormController';
import { styles } from '../css/application.css';

const formKeyInput = document.

const cipherFormController = new cipherForm();
cipherFormController.validateForm();
cipherFormController.ensureCorrectPlaceholder();



if (module.hot) {
    module.hot.accept();
}
