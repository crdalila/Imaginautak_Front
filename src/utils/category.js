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

//GET CATEGORY BY NAME
async function getCategoryByName(category_name){
    const category = await fetchData(`/categorias/${category_name}`)
    return category;
}

export {
    getAllCategories,
    getCategoryById,
    getCategoryByName,
}