import { useState, useEffect } from "react";

import './Home.css';
import CategoryList from "../category/getAll/categoryList";
import ArtistList from "../artist/getAll/artistList";
import ProjectList from "../project/getAll/projectList";
import Navbar from "../navbar/Navbar";

function HomePage({onRouteChange}){
    const categories = <CategoryList onRouteChange={onRouteChange} preview ={true} />;
    const artists = ArtistList({onRouteChange});
    const projects = ProjectList({onRouteChange});
    const navbar = Navbar({onRouteChange});

    // renderizado:
    return (
        <section className="home">
            <section className="home__header">
                <h1>IMAGINAUTAK</h1>
                <p>Descubre artistas emergentes y comparte tus propios proyectos</p>
            </section>
            <section className="home__navbar">
                {navbar}
            </section>
            <section className="home__content">
                <section className="home__content-categories">
                    {categories}
                </section>
                <section className="home__content-projects">
                    {projects}
                </section>
                <section className="home__content-artist">
                    {artists}
                </section>
            </section>
        </section>
    )
}

export default HomePage;