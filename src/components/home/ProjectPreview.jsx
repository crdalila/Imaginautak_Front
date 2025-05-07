import { useState, useEffect, useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import ProjectSmallCard from "./ProjectSmallCard";
import './ProjectPreview.css';


function ProjectPreview({ preview = false, initialData = null }) {
    const loaderData = useLoaderData(); //solo se activa si hay loader, si no viene de home
    const [projects, setProjects] = useState(initialData || loaderData || []); //utiliza initialData si viene de Home, loaderData si viene de CategoryList
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!initialData && !loaderData) {
            //si no viene nada, haz el fetch manual
            fetch('/proyectos')
                .then(res => res.json())
                .then(data => setProjects(data))
                .catch(err => console.error(err));
        }
    }, []);

    // renderizado:
    return (
        <section className="preview preview__project">
            <section className="preview__header preview__project-header">
                <h1>Proyectos</h1>
                <p>Encuentra proyectos para favoritear en nuestra lista de proyectos</p>
                {error && <p className="error"> {error}</p>}
            </section>

            <section className="preview__project-cards preview__carousel">
                {projects.length == 0 && <p>No hay proyectos disponibles</p>}
                    {projects.map (project => (
                        <div className="preview__project-card preview__carousel-item">
                            <ProjectSmallCard project={project} />
                        </div>
                    ))}
            </section>
        </section>
    )
}

export default ProjectPreview;