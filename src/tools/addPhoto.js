const addPhoto = (photo) => {
    const body = document.querySelector('.body')

    const photoBox = document.createElement('p')

    const photoTitle = document.createElement('div')
    photoTitle.textContent = photo.title

    const photoUrl = document.createElement('div')
    photoUrl.textContent = photo.url

    const photoThumbnailUrl = document.createElement('div')
    photoThumbnailUrl.textContent = photo.thumbnailUrl

    photoBox.append(photoTitle)
    photoBox.append(photoUrl)
    photoBox.append(photoThumbnailUrl)

    body.prepend(photoBox)
}

export { addPhoto }