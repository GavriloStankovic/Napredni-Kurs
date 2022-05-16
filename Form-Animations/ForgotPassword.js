import { changePassword } from "./korisnici.js";
const inputEmail = document.querySelector('#email')
const inputNewPassword = document.querySelector('#newPassword')
const inputConfirmPassword = document.querySelector('#confPassword')
const forma = document.querySelector('form')

forma.addEventListener('submit', (e) => {
    e.preventDefault()
    if(changePassword(inputEmail, inputNewPassword, inputConfirmPassword)){
        window.location.href = 'Login.html'
    }
})
