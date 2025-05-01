import fetchData from "./fetch.js";

// GET ALL CATEGORIES
async function getAllCategories(){
    const categories = await fetchData("/categorias")
    return categories;
}

export {
    getAllCategories
}