import { fadeIn, fadeOut } from '../utils/animators';
import { phoneRegExp, nameRegExp, checkField } from '../utils/check-data-field'
import {sendFormData} from "../utils/mailer";

const modalCalls = ()=> {
    const overlay = document.querySelector('.modal-overlay');

    //Форма заказа обратногозвонка
    const callbackForm = document.getElementById('callback');
    const callBackCloseBtn = callbackForm.querySelector('.modal-close');
    const callBackFioField = callbackForm.querySelector('input[name="fio"]');
    const callBackPhoneField = callbackForm.querySelector('input[name="tel"]');
    const callBackSubmitButton = callbackForm.querySelector(' input.button.btn.feedback');
    //callBackSubmitButton.style.color = 'red'

    //Форма обратной связи
    const feedbackForm = document.getElementById('feedback');
    const feedBackFioField = feedbackForm.querySelector('input[name="fio"]');
    const feedBackPhoneField = feedbackForm.querySelector('input[name="tel"]');
    const feedBackMessageField = feedbackForm.querySelector('textarea[name="message"]');
    //console.log(feedBackMessageField)
    const feedBackSubmitButton = feedbackForm.querySelector(' input.button.btn.feedback');


    //Форма заявки
    const invoiceForm = document.getElementById('application');
    const invoiceLine = invoiceForm.querySelector('#applicationInput');
    const invoiceFioField = invoiceForm.querySelector('input[name="fio"]');
    const invoicePhoneField = invoiceForm.querySelector('input[name="tel"]');
    const invoiceSubmitButton = invoiceForm.querySelector(' input.button.btn.feedback');

    //Окно сообщения об отправке
    const responseMessage = document.getElementById('responseMessage');

    // Кнопки вызова модальных окон
    const callbackBtn = document.querySelectorAll('.callback-btn');
    const feedbackButton = document.querySelectorAll('.button-services');
    const invoiceButton = document.querySelector('.services-carousel').querySelectorAll('.absolute');

    const phoneLength = 12;

    function formShow(button, forma, overlay = false) {
        button.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                // e.stopPropagation()
                e.preventDefault();
                if (overlay) {
                    fadeIn(overlay);
                }
                fadeIn(forma);
                if (forma === feedbackForm) {
                    invoiceForm.style.display = 'none'


                } else if (forma === invoiceForm) {
                    feedbackForm.style.display = 'none'
                    invoiceLine.value = btn.dataset.application

                }


            });
        })
    }

    if (invoiceButton.length > 0) {

        formShow(invoiceButton, invoiceForm);


    }


    if (feedbackButton.length > 0) {
        /*
        fadeOut(invoiceForm)*/
        formShow(feedbackButton, feedbackForm);


    }

    if (callbackBtn.length > 0) {

        formShow(callbackBtn, callbackForm, overlay);
    }

    callBackCloseBtn.addEventListener('click', () => {
        callbackClose()
    });
    overlay.addEventListener('click', () => {
        callbackClose()
    })

    function callbackClose() {
        fadeOut(overlay);
        fadeOut(callbackForm)
    }

    //Обработчики нажатия кнопок форм

    callbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let fieldErrorFlag = false
        // if ((callBackFioField.value == 0) || (checkField(callBackFioField.value, nameRegExp) === false)){
        if (checkField(callBackFioField.value, nameRegExp, false) === false) {
            callBackFioField.classList.add('error')
            fieldErrorFlag = false
            return
        } else {
            callBackFioField.classList.remove('error')
            fieldErrorFlag = true

        }
        if ((callBackPhoneField.value.length !== phoneLength) || (checkField(callBackPhoneField.value, phoneRegExp) === false)) {

            callBackPhoneField.classList.add('error')
            fieldErrorFlag = false
            return;
        } else {
            callBackPhoneField.classList.remove('error')
            fieldErrorFlag = true

        }
        if (fieldErrorFlag) {
                const formData = {
                fio: callBackFioField.value,
                tel: callBackPhoneField.value
            };
            // Отправка данных формы
            sendFormData(formData)
                .then((data) => {
                    showMessage(callbackForm, 'Отправлено!', 'success');
                    console.log(data);
                })
                .catch((error) => {
                    showMessage(callbackForm, 'Ошибка отправки!', 'error');
                    console.error(error);
                });
        } else {
            return;
        }

    });

    feedbackForm.addEventListener('submit', function(event){
        event.preventDefault();
        let fieldErrorFlag = false
        if  (checkField(feedBackFioField.value, nameRegExp ,false) === false){
            feedBackFioField.classList.add('error')
            fieldErrorFlag = false

        }
        else {
            feedBackFioField.classList.remove('error')
            fieldErrorFlag = true

        }
        if ((feedBackPhoneField.value.length !==phoneLength) || (checkField(feedBackPhoneField.value, phoneRegExp) === false)){

            feedBackPhoneField.classList.add('error')
            fieldErrorFlag = false

        }
        else {
            feedBackPhoneField.classList.remove('error')
            fieldErrorFlag = true

        }

        if (feedBackMessageField.value.trim() !== ""){
            feedBackMessageField.classList.remove('error')
            fieldErrorFlag = true
        } else {
            feedBackMessageField.classList.add('error')
            fieldErrorFlag=false
        }

        if(fieldErrorFlag){
            const formData = {
                fio: feedBackFioField.value,
                tel: feedBackPhoneField.value,
                message: feedBackMessageField.value
            };
            // Отправка данных формы
            sendFormData(formData)
                .then((data) => {
                    showMessage(feedbackForm, 'Отправлено!', 'success');
                   // console.log(data);
                    closeForm(invoiceForm);
                })
                .catch((error) => {
                    showMessage(feedbackForm, 'Ошибка отправки!', 'error');
                  //  console.error(error);
                });

        } else {
            return
        }

    });


    invoiceForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let fieldErrorFlag = false

        if (checkField(invoiceFioField.value, nameRegExp) === false) {
            invoiceFioField.classList.add('error')
            fieldErrorFlag = false

        } else {
            invoiceFioField.classList.remove('error')
            fieldErrorFlag = true

        }

        if ((invoicePhoneField.value.length !== phoneLength) || (checkField(invoicePhoneField.value, phoneRegExp) === false)) {

            invoicePhoneField.classList.add('error')
            fieldErrorFlag = false

        } else {
            invoicePhoneField.classList.remove('error')
            fieldErrorFlag = true

        }
        if (fieldErrorFlag) {
            //Отправка формы
            //console.log('Отправка формы')
            const formData = {
                fio: invoiceFioField.value,
                tel: invoicePhoneField.value,
                invoice: invoiceLine.value
            };
            // Отправка данных формы
            sendFormData(formData)
                .then((data) => {
                    showMessage(invoiceForm, 'Отправлено!', 'success');
                   // console.log(data);
                    closeForm(invoiceForm);
                })
                .catch((error) => {
                    showMessage(invoiceForm, 'Ошибка отправки!', 'error');
                  //  console.error(error);
                    //closeForm(invoiceForm);
                });

        } else {
            return
        }

    });

    function showMessage(form, message, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add(type);

        const lastElement = form.lastElementChild;
        form.insertBefore(messageElement, lastElement.nextSibling);

        setTimeout(() => {
            messageElement.remove();
        }, 3000); // удаляем сообщение через 3 секунды
    }
function closeForm(forma){
    setTimeout(() => {
       forma.style.display='';
    }, 3300); // удаляем сообщение через 3 секунды
}

}

export default modalCalls