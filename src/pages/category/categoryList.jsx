import { useState, useEffect, useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import CategoryCard from "../../components/category/CategoryCard";
import ButtonBack from "../../components/button/buttonBack";
import NavbarFilters from "../../components/navbar/navbarFilters";
import './categoryList.css';


// GET ALL CATEGORIES
function CategoryList({ initialData = null }) {
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
        <section className="categories getAll">
            
            <section className="button_back">
                <ButtonBack />
            </section>

            <div ref={firstCategoryRef}></div>
            
            <section className="categories__header getAll__header">
                <h1>Categorías</h1>
                <p>Ponerle límites a la creatividad es tan complicado como etiquetar el arte en una sola categoría. Hay miles de disciplinas artísticas distintas, casi una por proyecto, pero aquí encontrarás una selección que engloba las más clásicas.</p>
                {error && <p className="error"> {error}</p>}
            </section>

            <section className="getAll__navbar-filters">
                <NavbarFilters />
            </section>

            <section className="category__cards">
                
                {categories.length === 0 && <p>No hay categorías disponibles</p>}
                    {categories.map(category => (
                        <div className="category__card">
                            <CategoryCard category={category} />
                        </div>
                    ))}
            </section>

            <button className="buttonUp" onClick={handleScrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24px" height="24px">
                <path fill="#ce7240" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                </svg>
            </button>

        </section>
    )
}

export default CategoryList;