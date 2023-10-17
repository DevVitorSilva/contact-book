import { uriDefault } from "../uriDefault.js";

export async function eventDeleteContact(contact) {
    try {
        fetch(`${uriDefault}/delete-contact/${contact._id}`, { method: 'DELETE' })
    } catch (error) {
        alert(`Ops, houve um erro ao deletar o contato ${contact.name}`)
    }
}