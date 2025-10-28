const getData = async (endpoint) => {
    // ===== Asynchronous function must return a promise =====
    return new Promise((resolve, reject) => {
        // ===== Creating request object =====
        const request = new XMLHttpRequest()


        // ===== Setting response due to the ready state status change ===== 
        request.addEventListener('readystatechange', (event) => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText))
            } else if (request.readyState === 4) {
                reject('Could not fetch the data!')
            }
        })


        // ===== Sending request =====
        request.open('GET', endpoint)
        request.send()
    })
}

export { getData }