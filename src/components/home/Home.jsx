import { useState, useEffect } from "react";

import './Home.css';
import CategoryList from "../category/getAll/categoryList";
import ArtistList from "../artist/getAll/artistList";
import ProjectList from "../project/getAll/projectList";
import NavbarFilters from "../navbar/navbarFilters";
import NavbarDown from "../navbar/navbarDown";

function HomePage({onRouteChange}){
    const categories = <CategoryList onRouteChange={onRouteChange} preview ={true} />;
    const artists = <ArtistList onRouteChange={onRouteChange} preview={true} />;
    const projects = <ProjectList onRouteChange={onRouteChange} preview={true} />;
    const navbar_filters = NavbarFilters({onRouteChange});
    const navbar_down = NavbarDown({onRouteChange});

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

            <section className="home__navbar-down">
                {navbar_down}
            </section>
        </section>
    )
}

export default HomePage;