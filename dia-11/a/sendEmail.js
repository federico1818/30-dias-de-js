export function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
        if(email && subject && body) {
            window.setTimeout(() => {
                resolve({
                    email,
                    subject,
                    body
                })
            }, 2000)
        }
        else {
            reject(new Error("Hacen falta campos para enviar el email"))
        }
    })
}