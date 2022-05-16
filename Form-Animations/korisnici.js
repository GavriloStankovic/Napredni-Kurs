export const isValid = (user, password, forma) => {
    let userExsist = false
    let username = false
    nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    if(user.value.trim() === '' && password.value.trim() === ''){
        alert('Morate uneti vas Username i Password!')
        forma.reset()
        return
    }
    if(user.value.trim() === ''){
        alert('Morate uneti vas Username!')
        return
    }
    if(password.value.trim() === ''){
        alert('Morate uneti vas Password!')
        return
    }
    nizKorisnika.forEach(element => {
        if(user.value.trim() === element.username){
            username = true
            if(password.value.trim() === element.password){
                userExsist = true
            } else {
                alert('Molimo vas unesite ispravan Password!')
            }
        }
    })
    if(!userExsist && !username){
        alert('Morate se registrovati kako biste pristupili sajtu')
        forma.reset()
        return
    }

    return userExsist
}

export const changePassword = (email, newPasword, confirmNewPassword) => {
    let changeApproval = false
    let userIndex 
    nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    for(let i = 0; i < nizKorisnika.length; i++){
        if(email.value.trim() === nizKorisnika[i].email){
            changeApproval = true
            userIndex = i
        }
    }
    if(changeApproval){
        if(newPasword.value.trim() === confirmNewPassword.value.trim()){
            nizKorisnika[userIndex].password = confirmNewPassword.value.trim()
            localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
        } else {
            alert('Morate uneti identican Password')
        }
    } else {
        alert('Unesena E-mail adressa nije postojeca')
    }
}

export const deleteUsers = (divRows, nizKorisnika) => {
    for(let i = 0; i < divRows.length; i++){
        if(divRows[i].classList.contains('marked')){
            nizKorisnika.splice(i + 1, 1)
            divRows.splice(i, 1)
            i--
        }
    }
}
export let nizKorisnika = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        firstName: 'Marko',
        lastName: 'Markovic',
        dateOfBirth: '1990-10-10',
        phoneNumber: '+381/600102003',
        username: 'kreativanNick',
        password: 'gaming123',
        email: 'kreativac@gmail.com',
        isAdmin: false
    },
    {
        first_name: 'Marta',
        last_name: 'Jovanovic',
        birthday: '1997-12-03',
        phone: '+381/601102303',
        username: 'ucenik',
        password: 'biblioteka17',
        email: 'martajov97@gmail.com',
        isAdmin: false
    },
    {
        first_name: 'Dunja',
        last_name: 'Micic',
        birthday: '1999-21-07',
        phone: '+381/642102553',
        username: 'dunjica12',
        password: 'mojpass99',
        email: 'dunjica99micic@yahoo.com',
        isAdmin: false
    }
]
if(localStorage.getItem('korisnici') === null){
    localStorage.setItem('korisnici', JSON.stringify(nizKorisnika))
}