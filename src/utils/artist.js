import fetchData from "./fetch.js";

const BASE_URL = "http://localhost:3000";

// GET ALL ARTISTS
async function getAllArtist(){
    const artists = await fetchData("/artistas")
    return artists;
}

// GET ARTIST BY ID
async function getArtistById(artist_id){
    const artist = await fetchData(`/artistas/${artist_id}`);
    return artist;
}

// GET ARTIST BY ARTISTIC NAME
async function getArtistByArtisticName(artistic_name){
    const artist = await fetchData(`/artistas/${artistic_name}`);
    return artist;
}

// GET ARTIST IMAGES
function getArtistImgs(artist) {
    const imgField = artist.img;

    // convertir el string de las fotos en array
    const imgArray = typeof imgField === 'string'
        ? imgField.split(',').map(filename => filename.trim()) // quitar espacios del string que recibimos de back
        : Array.isArray(imgField)
            ? imgField
            : [];

    return imgArray.map(filename => `${BASE_URL}/${filename.replace(/^public\//, '')}`);
}

// REMOVE ARTIST
async function removeArtist(artist_id){
    const response = await fetchData(`/artistas/${artist_id}/eliminar`, "DELETE");
    return response;
}


export {
    getAllArtist,
    getArtistByArtisticName,
    getArtistById,
    getArtistImgs,
    removeArtist
}