import { eventEditMyContact } from "./events/eventEditMyContact.js"

const btnSaveContact = document.querySelector('#saveContact')
const name = document.querySelector('#name')
const number = document.querySelector('#number')
const data = localStorage.getItem('myContact')
const user = JSON.parse(data)

name.value = user.name
number.value = user.contact

btnSaveContact.addEventListener('click', (event) => {
    event.preventDefault()
    eventEditMyContact()

})
