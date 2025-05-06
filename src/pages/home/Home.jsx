import { useState, useEffect } from "react";

import './Home.css';
import CategoryList from "../category/categoryList";
import ArtistList from "../artist/artistList";
import ProjectList from "../project/projectList";
import NavbarFilters from "../../components/navbar/navbarFilters";

function HomePage({onRouteChange}){
    const categories = <CategoryList onRouteChange={onRouteChange} preview ={true} />;
    const artists = <ArtistList onRouteChange={onRouteChange} preview={true} />;
    const projects = <ProjectList onRouteChange={onRouteChange} preview={true} />;
    const navbar_filters = NavbarFilters({onRouteChange});

    // renderizado:
    return (
        <section className="home">
            <section className="home__header">
                <h1>IMAGINAUTAK</h1>
                <p>Descubre artistas emergentes y comparte tus propios proyectos</p>
            </section>

            <section className="home__navbar-filters">
                {navbar_filters}
            </section>

            <section className="home__content">
                <section className="home__content-categories">
                    {categories}
                </section>
                <section className="home__content-artist">
                    {artists}
                </section>
                <section className="home__content-projects">
                    {projects}
                </section>
            </section>
        </section>
    )
}

export default HomePage;