import fetchData from "./fetch.js";

// GET ALL ARTISTS
async function getAllArtist(){
    const artists = await fetchData("/artistas")
    return artists;
}

// GET ARTIST BY ID
async function getArtistByID(){
    const artist = await fetchData(`/artistas/${user_id}`);
    return artist;
}

// GET ARTIST BY ARTISTIC NAME
async function getArtistByArtisticName(){
    const artist = await fetchData(`/artistas/${artistic_name}`);
    return artist;
}

export {
    getAllArtist,
    getArtistByArtisticName,
    getArtistByID
}