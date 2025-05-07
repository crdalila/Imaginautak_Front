import { useLoaderData } from "react-router-dom";

import CategoryList from "../category/categoryList";
import ArtistList from "../artist/artistList";
import ProjectList from "../project/projectList";
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
                    <CategoryList preview={true} initialData={categories} />
                </section>
                <section className="home__content-artist">
                    <ArtistList preview={true} initialData={artists} />
                </section>
                <section className="home__content-projects">
                    <ProjectList preview={true} initialData={projects} />
                </section>
            </section>
        </section>
    )
}

export default HomePage;
