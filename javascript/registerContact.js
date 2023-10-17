import { eventRegisterContact } from "./events/eventRegisterContact.js"

const btnSaveContact = document.querySelector('#saveContact')

btnSaveContact.addEventListener('click', (event) => {
    eventRegisterContact(event)
})