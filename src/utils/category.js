import fetchData from "./fetch.js";

// GET ALL CATEGORIES
async function getAllCategories(){
    const categories = await fetchData("/categorias")
    return categories;
}

// GET CATEGORY BY ID
async function getCategoryById(category_id){
    const category = await fetchData(`/categorias/${category_id}`)
    return category;
}


export {
    getAllCategories,
    getCategoryById,
}