const getData = async (endpoint) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', (event) => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText))
            } else if (request.readyState === 4) {
                reject('Could not fetch the data!')
            }
        })

        request.open('GET', endpoint)
        request.send()
    })
}

export { getData }