import { useLoaderData } from "react-router-dom";

import CategoryPreview from "../../components/home/CategoryPreview";
import ArtistPreview from "../../components/home/ArtistPreview";
import ProjectPreview from "../../components/home/ProjectPreview";
import NavbarFilters from "../../components/navbar/navbarFilters";
import './Home.css';

function HomePage(){
    const { categories, artists, projects } = useLoaderData();

    return (
        <section className="home">
            <section className="home__header">
                <h1>IMAGINAUTAK</h1>
                <p>Descubre artistas emergentes y comparte tus propios proyectos</p>
            </section>

            <section className="home__navbar-filters">
                <NavbarFilters />
            </section>

            <section className="home__content">
                <section className="home__content-categories">
                    <CategoryPreview initialData={categories} />
                </section>

                <section className="home__content-artist">
                    <ArtistPreview initialData={artists} />
                </section>
                
                <section className="home__content-projects">
                    <ProjectPreview initialData={projects} />
                </section>
            </section>
            
        </section>
    )
}

export default HomePage;
