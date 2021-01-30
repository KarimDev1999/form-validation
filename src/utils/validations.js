export const validate = (value, name) => {
    let errors = {};
    switch (name) {
        case 'name': {
            if (!value) {
                errors.name = 'Заполните обязательное поле'
                break
            }
            if (value.split('').some(chr => chr !== ' ' && !isNaN(chr))) {
                errors.name = 'Нельзя использовать цифры в имени'
            }
            else {
                errors.name = ''
            }
            break;
        }
        case 'email': {
            if (!value) {
                errors.email = 'Заполните обязательное поле'
                break
            }
            if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                errors.email = 'Введено некорректное значение'
            }
            else {
                errors.email = ''
            }
            break
        }
        case 'phone': {
            if (!value) {
                errors.phone = 'Заполните обязательное поле'
                break
            }
            if (value.split('').some(chr => isNaN(chr))) {
                errors.phone = 'Введен некорректный телефон'
            }
            else {
                errors.phone = ''
            }
            break
        }
        default:
            break;
    }

    return errors
}