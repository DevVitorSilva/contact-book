import { uriDefault } from "../uriDefault.js"
import { eventDeleteContact } from "./eventDeleteContact.js"
import { eventSaveToLocalStorage } from "./eventSaveToLocalStorage.js"

export const eventGetMyContacts = async () => {
    const containerclass = document.querySelector('.container')

    try {
        const response = await fetch(`${uriDefault}/all-contacts`)
        const data = await response.json()
        const ul = document.createElement('ul')

        containerclass.appendChild(ul)
        ul.classList.add('d-flex', 'flex-column', 'align-items-center', 'mt-4')

        data.forEach(element => {
            const aEdit = document.createElement('a')
            const aDelete = document.createElement('a')
            const li = document.createElement('li')
            const span = document.createElement('span')

            li.innerHTML = `${element.name} | ${element.contact}`
            aEdit.innerHTML = 'Editar'
            aDelete.innerHTML = 'Deletar'

            li.style.listStyle = 'none'
            li.classList.add('mb-1', 'd-flex', 'flex-column')
            aEdit.classList.add('btn', 'btn-primary', 'me-1')
            aDelete.classList.add('btn', 'btn-secondary')

            aEdit.href = './html/editMyContact.html'

            aDelete.setAttribute("onclick", "deleteFromRoot(this)")

            aEdit.addEventListener('click', (event) => {
                eventSaveToLocalStorage(event, element)
            })

            aDelete.addEventListener('click', () => {
                eventDeleteContact(element)
            })

            span.appendChild(aEdit)
            span.appendChild(aDelete)
            ul.appendChild(li)
            li.appendChild(span)

        });
    } catch (error) {
        containerclass.innerHTML = 'Ops, houve um erro.'
        console.log(error);
    }

}
