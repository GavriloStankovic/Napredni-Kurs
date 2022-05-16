import { isValid } from "./korisnici.js";

const inportUsername = document.querySelector('#user')
const inportPassword = document.querySelector('#password')
const forma = document.querySelector('form')

forma.addEventListener('submit', (e) => {
    console.log(forma);
    e.preventDefault()
    if(isValid(inportUsername, inportPassword, forma)){
        if(inportUsername.value.trim() === 'admin'){
            window.location.href = 'AdminPage.html'
        } else {
            window.location.href = 'UserPage.html'
        }
    }
})