export function validateForm(formData, registeredUsers) {
    const required = ['name', 'lastname', 'email', 'password']
    const errors = [] 
    required.forEach(property => {
        if(!(formData.hasOwnProperty(property) && formData[property])) {
            errors.push(property)
        }
    })
    if(errors.length > 0) {
        throw new Error(`Faltan los siguientes campos: ${ errors.join(', ') }`)
    }
    if(registeredUsers.some(user => user.email == formData.email)) {
        throw new Error(`Email duplicado: ${ formData.email }`)
    }
    const { name, lastname, email } = formData
    registeredUsers.push({
        name, lastname, email
    })
    return `Tu registro fue exitoso ${ name } ${ lastname }`
}