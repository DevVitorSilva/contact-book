export async function eventSaveToLocalStorage(event, user) {
    event.preventDefault()

    try {
        localStorage.setItem('myContact', JSON.stringify(user))

        window.location = '/html/editMyContact.html'

    } catch (error) {
        const errorMsg = document.querySelector('#error')
        errorMsg.innerHTML = 'Ops, houve um error ao tentar editar o contato'
    }

}