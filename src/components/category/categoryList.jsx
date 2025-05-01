import { useState, useEffect } from "react";
import CategoryCard from "./categoryCard";
import { getAllCategories } from "../../utils/category";
import './categoryList.css';


function CategoryList({onRouteChange}){
    // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
    const [categories, setCategories] = useState([]); //empieza con una lista vacía
    const [error, setError] = useState(null);
    useEffect(()=>{
        handleLoadStands();
    },[])
    // función que carga las categorías
    const handleLoadStands = async () => {
        const data  = await getAllCategories();
        if (data.error) {
            setError(data.error);
        } else {
            setCategories(data); //si todo va bien, lo guarda en categories
        }
    }
    // renderizado:
    return (
        <section className="category__getAll">
            <h1>Categorías</h1>
            <p>Explora las diferentes categorías de arte que ofrecemos</p>
            {error && <p className="error"> {error}</p>}
            <section className="category__getAll-cards">
                {categories.length == 0 && <p>No hay categorías disponibles</p>}
                {categories.map (categories => {
                    return <CategoryCard categories={categories} key={categories.categories_id} /> 
                })
                }
            </section>
        </section>
    )
}

export default CategoryList;