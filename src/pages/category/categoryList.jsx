import { useState, useEffect, useContext, useRef } from "react";

import CategoryCard from "../../components/category/categoryCard";
import { getAllCategories } from "../../utils/category";
import RouteContext from "../../context/RouteContext";
import './categoryList.css';
import App from "../../App";


// GET ALL CATEGORIES
function CategoryList({preview = false }){
    // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
    const [categories, setCategories] = useState([]); //empieza con una lista vacía
    const {onRouteChange} = useContext(RouteContext);
    const firstCategoryRef = useRef(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        handleLoadCategories();
    },[])
    
    // función que carga las categorías
    const handleLoadCategories = async () => {
        const data  = await getAllCategories();
        if (data.error) {
            setError(data.error);
        } else {
            setCategories(data); //si todo va bien, lo guarda en categories
        }
    }
    // función que hace scroll
    const handleScrollToTop= ()=>{
        firstCategoryRef.current.scrollIntoView({behavior: 'smooth'})
    }

    // renderizado:
    return (
        <section className="category__getAll">
            <h1>Categorías</h1>
            <p>Explora las diferentes categorías de arte que ofrecemos</p>
            {error && <p className="error"> {error}</p>}
            <section className="category__getAll-cards">
                <div ref={firstCategoryRef}></div>
                {categories.length === 0 && <p>No hay categorías disponibles</p>}
                <div className={preview ? "category__carousel" : ""}>
                    {categories
                        .slice(0, preview ? 5 : categories.length)
                        .map(category => (
                            <div className={preview ? "category__carousel-item" : ""} key={category.category_id}>
                                <CategoryCard category={category} preview={preview} />
                            </div>
                    ))}
                </div>
                <button className={preview ? "category__preview-button" : "category__button"} onClick={handleScrollToTop}>Volver arriba</button>
            </section>
        </section>
    )
}

export default CategoryList;