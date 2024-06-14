import { fadeIn, fadeOut } from '../utils/animators';
import { phoneRegExp, nameRegExp,validateField } from '../utils/check-data-field'
import {sendFormData} from "../utils/mailer";

const modalCalls = ()=> {
    const overlay = document.querySelector('.modal-overlay');

    //Форма заказа обратногозвонка
    const callbackForm = document.getElementById('callback');
    const callBackCloseBtn = callbackForm.querySelector('.modal-close');
    const callBackFioField = callbackForm.querySelector('input[name="fio"]');
    const callBackPhoneField = callbackForm.querySelector('input[name="tel"]');



    //Форма обратной связи
    const feedbackForm = document.getElementById('feedback');
    const feedBackFioField = feedbackForm.querySelector('input[name="fio"]');
    const feedBackPhoneField = feedbackForm.querySelector('input[name="tel"]');
    const feedBackMessageField = feedbackForm.querySelector('textarea[name="message"]');



    //Форма заявки
    const invoiceForm = document.getElementById('application');
    const invoiceLine = invoiceForm.querySelector('#applicationInput');
    const invoiceFioField = invoiceForm.querySelector('input[name="fio"]');
    const invoicePhoneField = invoiceForm.querySelector('input[name="tel"]');


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

       // formShow(invoiceButton, invoiceForm);
        formShow(invoiceButton, callbackForm, overlay);



    }


    if (feedbackButton.length > 0) {
        /*
        fadeOut(invoiceForm)*/
       // formShow(feedbackButton, feedbackForm);
        formShow(feedbackButton, callbackForm, overlay);



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
    // Универсальная функция для обработки форм
    function handleFormSubmit(event, form, fields) {
        event.preventDefault();
        let isValid = true;
        let formData = {};

        // Проверка всех полей
        fields.forEach(field => {
            const { element, regexp, length, required } = field;
            const valid = validateField(element, regexp, length, required);
            if (!valid) {
                isValid = false;
            }
            formData[element.name] = element.value;
        });

        // Отправка формы, если все поля валидны
        if (isValid) {
            sendFormData(formData)
                .then((data) => {
                    showMessage(form, 'Отправлено!', 'success');
                   // console.log(data);
                    if (form === invoiceForm) {
                        closeForm(invoiceForm);
                    } else if (form === feedbackForm){
                        closeForm(feedbackForm)
                    }
                })
                .catch((error) => {
                    showMessage(form, 'Ошибка отправки!', 'error');
                   // console.error(error);
                });
        }
    }

// Обработчики для каждой формы
    callbackForm.addEventListener('submit', (event) => {
        handleFormSubmit(event, callbackForm, [
            { element: callBackFioField, regexp: nameRegExp, required: true },
            { element: callBackPhoneField, regexp: phoneRegExp, length: phoneLength, required: true }
        ]);
    });

    feedbackForm.addEventListener('submit', (event) => {
        handleFormSubmit(event, feedbackForm, [
            { element: feedBackFioField, regexp: nameRegExp },
            { element: feedBackPhoneField, regexp: phoneRegExp, length: phoneLength, required: true },
            { element: feedBackMessageField, regexp: /.+/, required: true } // простая проверка на непустое сообщение
        ]);
    });

    invoiceForm.addEventListener('submit', (event) => {
        handleFormSubmit(event, invoiceForm, [
            { element: invoiceFioField, regexp: nameRegExp, required: true },
            { element: invoicePhoneField, regexp: phoneRegExp, length: phoneLength, required: true },
            { element:  invoiceLine,  regexp: /.+/}
        ]);
    });

 // -----
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