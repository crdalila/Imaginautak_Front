import fetchData from "./fetch.js";

// GET ALL ARTISTS
async function getAllArtist(){
    const artists = await fetchData("/artistas")
    return artists;
}

export {
    getAllArtist
}