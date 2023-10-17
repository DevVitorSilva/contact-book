import { uriDefault } from "../uriDefault.js"

export async function eventEditMyContact() {

    try {
        const name = document.querySelector('#name').value
        const number = document.querySelector('#number').value
        const dataUser = localStorage.getItem('myContact')
        const user = JSON.parse(dataUser)
        const errorMsg = document.querySelector('#error')

        if (parseInt(number)) {
            parseInt(number)

        } else {
            errorMsg.innerHTML = 'No campo "Número" deve ser colocado apenas caracteres numéricos'
        }

        const response = await fetch(`${uriDefault}/update-contact`,
            {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        id: user._id,
                        name: name,
                        contact: parseInt(number)
                    }
                ),
                headers: { 'content-type': 'application/json' }
            }
        )

        const data = await response.json()

        if (data.success) {
            window.location = '/frontend/html/viewMyContacts.html'
            localStorage.clear()
        }

    } catch (error) {
        console.log(error);
    }

}