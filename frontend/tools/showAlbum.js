const showAlbum = (albums, albumObj) => {
    const album = document.createElement('li')
    album.id = albumObj.id

    const albumLink = document.createElement('a')
    albumLink.textContent = albumObj.title
    albumLink.href = `http://127.0.0.1:5500/frontend/photos/index.html?albumId=${albumObj.id}`

    album.append(albumLink)

    albums.prepend(album)
}

export { showAlbum }