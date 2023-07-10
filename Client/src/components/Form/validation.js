const validator = (data ) =>{
let errors = {}
if (!data.email) {
    errors.email1 = 'Ingresa un email'
} else if (data.email.length > 35) {
    errors.email2 = 'El email debe tener 35 caracteres como maximo'
} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email3 = 'formato inválido de email'
}

if (data.password.length<6 || data.password.length>10) {
    errors.password1 = 'El password debe tener entre 6 y 10 caracteres'
} else if (!/.*\d+.*/.test(data.password) ) {
    errors.password2 = 'El password debe tener al menos 1 número'
}
return errors
}
export default validator