import { useState, useEffect, useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import CategoryCard from "../../components/category/categoryCard";
import './categoryList.css';


// GET ALL CATEGORIES
function CategoryList({ preview = false, initialData = null }) {
    const loaderData = useLoaderData(); //solo se activa si hay loader, si no viene de home
    const [categories, setCategories] = useState(initialData || loaderData || []); //utiliza initialData si viene de Home, loaderData si viene de CategoryList
    const [error, setError] = useState(null);
    const firstCategoryRef = useRef(null);
    
    useEffect(() => {
        if (!initialData && !loaderData) {
            //si no viene nada, haz el fetch manual
            fetch('/categorias')
                .then(res => res.json())
                .then(data => setCategories(data))
                .catch(err => console.error(err));
        }
    }, []);

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