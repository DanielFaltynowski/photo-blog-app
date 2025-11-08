const showUser = (user, userObj) => {
    user.id = userObj.id

    const userName = document.createElement('div')
    userName.textContent = `Name: ${userObj.name}`
    userName.classList.add('user-name')

    const userUsername = document.createElement('div')
    userUsername.textContent = `Username: ${userObj.username}`
    userUsername.classList.add('user-username')

    const userEmail = document.createElement('div')
    userEmail.textContent = `Email: ${userObj.email}`
    userEmail.classList.add('user-email')

    const userStreet = document.createElement('div')
    userStreet.textContent = `Street: ${userObj.address.street}`
    userStreet.classList.add('user-street')

    const userSuite = document.createElement('div')
    userSuite.textContent = `Suite: ${userObj.address.suite}`
    userSuite.classList.add('user-suite')

    const userCity = document.createElement('div')
    userCity.textContent = `City: ${userObj.address.city}`
    userCity.classList.add('user-city')

    const userZipcode = document.createElement('div')
    userZipcode.textContent = `Zipcode: ${userObj.address.zipcode}`
    userZipcode.classList.add('user-zipcode')

    const userGeo = document.createElement('div')
    userGeo.textContent = `Geo: lat ${userObj.address.geo.lat}, lng ${userObj.address.geo.lng}`
    userGeo.classList.add('user-geo')

    const userPhone = document.createElement('div')
    userPhone.textContent = `Phone: ${userObj.phone}`
    userPhone.classList.add('user-phone')

    const userWebside = document.createElement('div')
    userWebside.textContent = `Website: ${userObj.website}`
    userWebside.classList.add('user-website')

    const userCompanyName = document.createElement('div')
    userCompanyName.textContent = `Company: ${userObj.company.name}`
    userCompanyName.classList.add('user-company-name')

    const userCompanyCatchPhrase = document.createElement('div')
    userCompanyCatchPhrase.textContent = `Catch Phrase: ${userObj.company.catchPhrase}`
    userCompanyCatchPhrase.classList.add('user-company-catchphrase')

    const userCompanyBs = document.createElement('div')
    userCompanyBs.textContent = `BS: ${userObj.company.bs}`
    userCompanyBs.classList.add('user-company-bs')

    user.append(
        userName,
        userUsername,
        userEmail,
        userStreet,
        userSuite,
        userCity,
        userZipcode,
        userGeo,
        userPhone,
        userWebside,
        userCompanyName,
        userCompanyCatchPhrase,
        userCompanyBs
    )
}

export { showUser }
