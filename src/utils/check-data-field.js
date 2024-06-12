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