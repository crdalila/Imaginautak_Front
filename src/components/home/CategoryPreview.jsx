import { useState, useEffect, useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import CategorySmallCard from "./CategorySmallCard";
import './CategoryPreview.css';


// GET ALL CATEGORIES
function CategoryPreview({ initialData = null }) {
    const loaderData = useLoaderData(); //solo se activa si hay loader, si no viene de home
    const [categories, setCategories] = useState(initialData || loaderData || []); //utiliza initialData si viene de Home, loaderData si viene de CategoryPreview
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

    // renderizado:
    return (
        <section className="preview preview__category">

            <section className="preview__header preview__category-header">
                <h1>Categorías</h1>
                <p>Explora las diferentes categorías de arte que ofrecemos</p>
                {error && <p className="error"> {error}</p>}
            </section>

            <section className="preview__category-cards preview__carousel">
                <div ref={firstCategoryRef}></div>
                {categories.length === 0 && <p>No hay categorías disponibles</p>}
                    {categories.map (category => (
                        <div className="preview__category-card preview__carousel-item">
                            <CategorySmallCard category={category}/>
                        </div>
                    ))}
            </section>
        </section>
    )
}

export default CategoryPreview;