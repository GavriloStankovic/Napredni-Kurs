import { renderBase, renderAdminPage } from "./function.js";
import { deleteUsers } from "./korisnici.js";

const writteUsers = document.querySelector('.main')
const deleteUserButton = document.querySelector('#delete')

renderAdminPage(writteUsers)

deleteUserButton.addEventListener('click', (e) => {
    console.log(deleteUserButton);
    let divRows = []
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    for(let i = 1; i < writteUsers.children.length; i++){
        divRows.push(writteUsers.children[i])
    }

    deleteUsers(divRows,nizKorisnika)
    localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
    writteUsers.textContent = ''
    renderBase(writteUsers)
    renderAdminPage(writteUsers)
})