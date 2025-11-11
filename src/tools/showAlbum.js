const showAlbum = (albums, albumObj) => {
    // ===== Creating new album =====
    const album = document.createElement('li')
    album.id = albumObj.id


    // ===== Creating album content =====
    const albumLink = document.createElement('a')
    albumLink.textContent = albumObj.title
    albumLink.href = `http://127.0.0.1:5500/src/photos/index.html?albumId=${albumObj.id}`


    // ===== Appending created content to the album =====
    album.append(albumLink)


    // ===== Appending completed album to the albums list =====
    albums.prepend(album)
}

export { showAlbum }