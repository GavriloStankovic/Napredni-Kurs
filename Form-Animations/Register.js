const inputFirstName = document.querySelector('#firstName')
const inputLastNme = document.querySelector('#lastName')
const inputUsername = document.querySelector('#username')
const inputDateOfBirth = document.querySelector('#date')
const inputEmail = document.querySelector('#email')
const inputPhoneNumber = document.querySelector('#tel')
const inputPassword = document.querySelector('#password')
const inputConfirmPassword = document.querySelector('#confirmPassword')
const forma = document.querySelector('form')

let newUser = {}
let freeUserName = false

inputUsername.addEventListener('focusout', (e) => {
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))
    freeUserName = true

    nizKorisnika.forEach(element => {
        if(inputUsername.value.trim() === element.username){
            freeUserName = false
        }
    });
    if(freeUserName){
        inputUsername.style.borderColor = '#0f0'
    } else {
        inputUsername.style.borderColor = '#f00'
    }
})

forma.addEventListener('submit', (e) => {
    e.preventDefault()
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))
    let acceptPhone = false
    let acceptPassword = false

    newUser = {
        firstName: inputFirstName.value.trim(),
        lastName: inputLastNme.value.trim(),
        username: '',
        dateOfBirth: inputDateOfBirth.value,
        email: inputEmail.value.trim(),
        password: '',
        phoneNumber: '',
        isAdmin: false
    }

    if(inputPhoneNumber.value.trim().length === 9 || inputPhoneNumber.value.trim().length === 10){
        newUser.phoneNumber = '+381/' + inputPhoneNumber.value.trim().substring(1)
        acceptPhone = true
    } else {
        alert('Morate uneti ispravan broj telefona')
        acceptPhone = false
    }

    if(freeUserName){
        newUser.username = inputUsername.value.trim()
    } else {
        alert('Izabrani Username je zauzet. Pokusajte drugi Username!')
    }

    if(inputPassword.value.trim() === inputConfirmPassword.value.trim()){
        newUser.password = inputConfirmPassword.value.trim()
        acceptPassword = true
    } else {
        alert('Morate uneti identican Password u oba polja!')
        acceptPassword = false
    }

    if(acceptPassword && acceptPhone && freeUserName){
        nizKorisnika.push(newUser)
        localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
        inputUsername.style.borderColor = '#68e0cc'
        alert('Uspesno ste se registrovali na Sajt')
        window.location.href = 'Login.html'
    }
})
