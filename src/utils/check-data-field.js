export const phoneRegExp = /^[\d+]+$/;
export const nameRegExp = /^[а-яёА-ЯЁ]+$/;
export function checkField(fieldData , regExpVal, fieldRequired = true){
    if (!fieldRequired && (fieldData.length == 0)){
        return true
    }
    if (!regExpVal.test(fieldData)) {
        return false

    } else {
        return true

    }


}

// Универсальная функция для проверки полей формы
export function validateField(field, regexp, length, required) {
    const value = field.value.trim();

    if (!required && value === '') {
        field.classList.remove('error');
        return true;
    }

    if ((length && value.length !== length) || !regexp.test(value)) {
        field.classList.add('error');
        return false;
    } else {
        field.classList.remove('error');
        return true;
    }
}
