import { uriDefault } from "../uriDefault.js";

export async function eventRegisterContact(event) {
    event.preventDefault()

    try {
        const errorMsg = document.querySelector('#error')
        const nameContact = document.querySelector('#name').value
        const numberContact = document.querySelector('#number').value

        let contact = {
            name: nameContact,
            contact: ''
        }

        if (parseInt(numberContact)) {
            contact.contact = parseInt(numberContact)
            console.log(contact);
        } else {
            return errorMsg.innerHTML = 'No campo "Número" deve ser colocado apenas caracteres numéricos'
        }

        if (nameContact.length < 3) {
            return errorMsg.innerHTML = 'No campo "Nome" deve conter no minimo 3 caracteres'
        }

        if (numberContact.length < 3) {
            return errorMsg.innerHTML = 'No campo "Número" deve conter no minimo 3 caracteres numéricos'
        }

        const response = await fetch(`${uriDefault}/register-contact`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(contact)

            }
        )

        const data = await response.json()

        if (data.success) {
            window.location = '/frontend/html/viewMyContacts.html'
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }

}