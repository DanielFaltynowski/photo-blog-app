const showPhoto = (photos, photoObj) => {
    // ===== Creating new photo =====
    const photo = document.createElement('p')
    photo.classList.add('photo')
    photo.id = photoObj.id


    // ===== Creating photo content =====
    const photoTitle = document.createElement('div')
    photoTitle.classList.add('photo-title')
    photoTitle.textContent = photoObj.title
    
    const photoUrl = document.createElement('div')
    photoUrl.classList.add('photo-url')
    photoUrl.textContent = photoObj.url
    
    const photoThumbnailUrl = document.createElement('div')
    photoThumbnailUrl.classList.add('photo-thumbnail-url')
    photoThumbnailUrl.textContent = photoObj.thumbnailUrl


    // ===== Appending created content to the photo =====
    photo.append(photoTitle, photoUrl, photoThumbnailUrl)


    // ===== Appending completed photo to the photos list =====
    photos.prepend(photo)
}

export { showPhoto }