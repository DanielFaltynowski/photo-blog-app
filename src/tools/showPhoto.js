const showPhoto = (photos, photoObj) => {
    const photo = document.createElement('p')
    photo.classList.add('photo')
    photo.id = photoObj.id

    const photoTitle = document.createElement('div')
    photoTitle.classList.add('photo-title')
    photoTitle.textContent = photoObj.title
    
    const photoUrl = document.createElement('div')
    photoUrl.classList.add('photo-url')
    photoUrl.textContent = photoObj.url
    
    const photoThumbnailUrl = document.createElement('div')
    photoThumbnailUrl.classList.add('photo-thumbnail-url')
    photoThumbnailUrl.textContent = photoObj.thumbnailUrl

    photo.append(photoTitle, photoUrl, photoThumbnailUrl)

    photos.prepend(photo)
}

export { showPhoto }