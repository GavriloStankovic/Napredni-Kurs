export const renderBase = (writteUsers) => {
    const divRow = document.createElement('div')
    divRow.classList.add('row')
    divRow.id = 'mainRow'

    const pFirstName = document.createElement('p')
    pFirstName.textContent = 'First Name'

    const pLastName = document.createElement('p')
    pLastName.textContent = 'Last Name'

    const pUsername = document.createElement('p')
    pUsername.textContent = 'Username'

    const pDateOfBirth = document.createElement('p')
    pDateOfBirth.textContent = 'Date of Birth'

    const pEmail = document.createElement('p')
    pEmail.textContent = 'E-mail'

    const pPhoneNumber = document.createElement('p')
    pPhoneNumber.textContent = 'Phone Number'

    const pPassword = document.createElement('p')
    pPassword.textContent = 'Password'

    divRow.append (
        pUsername,
        pFirstName,
        pLastName,
        pEmail,
        pPassword,
        pPhoneNumber,
        pDateOfBirth
    )
    
    writteUsers.appendChild(divRow)
}

export const renderAdminPage = (writteUsers) => {
    let nizKorisnika = JSON.parse(localStorage.getItem('korisnici'))

    for(let i = 0; i < nizKorisnika.length; i++){
        if(nizKorisnika[i].isAdmin)
            continue

         const divRow = document.createElement('div')
         divRow.classList.add('row')

         const pFirstName = document.createElement('p')
         pFirstName.textContent = nizKorisnika[i].firstName

         const pLastName = document.createElement('p')
         pLastName.textContent = nizKorisnika[i].lastName

         const pUsername = document.createElement('p')
         pUsername.textContent = nizKorisnika[i].username

         const pDateOfBirth = document.createElement('p')
         pDateOfBirth.textContent = nizKorisnika[i].dateOfBirth

         const pEmail = document.createElement('p')
         pEmail.textContent = nizKorisnika[i].email

         const pPhoneNumber = document.createElement('p')
         pPhoneNumber.textContent = nizKorisnika[i].phoneNumber

         const pPassword = document.createElement('p')
         pPassword.textContent = nizKorisnika[i].password

         divRow.append(
             pUsername,
             pFirstName,
             pLastName,
             pEmail,
             pPassword,
             pPhoneNumber,
             pDateOfBirth
         )

         writteUsers.appendChild(divRow)

         divRow.addEventListener('click', (e) => {
             if(!divRow.classList.contains('marked')){
                 divRow.classList.add('marked')
                 divRow.style.backgroundColor = '#262155'
                 divRow.style.borderRadius = '2rem'
             } else {
                 divRow.classList.remove('marked')
                 divRow.style.backgroundColor = '#0e0c1f'
             }
         })
    }
}