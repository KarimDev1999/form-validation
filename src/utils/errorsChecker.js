export const errorsChecker = (obj) => {
    return Object.keys(obj).some(value => obj[value])
}