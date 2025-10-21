const addUser = (user) => {
    const id = document.querySelector('.id')
    id.textContent = user.id
    
    const name = document.querySelector('.name')
    name.textContent = user.name
    
    const username = document.querySelector('.username')
    username.textContent = user.username
    
    const phone = document.querySelector('.phone')
    phone.textContent = user.phone
    
    const email = document.querySelector('.email')
    email.textContent = user.email
    
    const website = document.querySelector('.website')
    website.textContent = user.website
    
    const city = document.querySelector('.city')
    city.textContent = user.address.city
    
    const lat = document.querySelector('.lat')
    lat.textContent = user.address.geo.lat
    
    const lng = document.querySelector('.lng')
    lng.textContent = user.address.geo.lng
    
    const street = document.querySelector('.street')
    street.textContent = user.address.street
    
    const suite = document.querySelector('.suite')
    suite.textContent = user.address.suite
    
    const zipcode = document.querySelector('.zipcode')
    zipcode.textContent = user.address.zipcode
    
    const companyBs = document.querySelector('.bs')
    companyBs.textContent = user.company.bs
    
    const companyCatchPhrase = document.querySelector('.catchPhrase')
    companyCatchPhrase.textContent = user.company.catchPhrase
    
    const companyName = document.querySelector('.company-name')
    companyName.textContent = user.company.name
}

export { addUser }