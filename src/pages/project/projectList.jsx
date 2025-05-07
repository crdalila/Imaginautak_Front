import { useState, useEffect, useContext, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import ProjectCard from "../../components/project/projectCard";
import { getAllProject } from "../../utils/project";
import RouteContext from "../../context/RouteContext";
import './projectList.css';


function ProjectList({ preview = false, initialData = null }) {
    const loaderData = useLoaderData(); //solo se activa si hay loader, si no viene de home
    const [projects, setProjects] = useState(initialData || loaderData || []); //utiliza initialData si viene de Home, loaderData si viene de CategoryList
    const [error, setError] = useState(null);
    const firstProjectRef = useRef(null);
    
    useEffect(() => {
        if (!initialData && !loaderData) {
            //si no viene nada, haz el fetch manual
            fetch('/proyectos')
                .then(res => res.json())
                .then(data => setProjects(data))
                .catch(err => console.error(err));
        }
    }, []);
    const handleScrollToTop= ()=>{
        firstProjectRef.current.scrollIntoView({behavior: 'smooth'})
    }

    // renderizado:
    return (
        <section className="project__getAll">
            <h1>Proyectos</h1>
            <p>Encuentra proyectos para favoritear en nuestra lista de proyectos</p>
            {error && <p className="error"> {error}</p>}
            <section className="project__getAll-cards">
                {projects.length == 0 && <p>No hay proyectos disponibles</p>}
                <div className={preview ? "project__carousel" : ""}>
                    {projects
                        .slice(0, preview ? 5 : projects.length)
                        .map(project => (
                            <div className={preview ? "project__carousel-item" : ""} key={project.project_id}>
                                <ProjectCard project={project} preview={preview} />
                            </div>
                    ))}
                </div>
                <button className={preview ? "project__preview-button" : "project__button"} onClick={handleScrollToTop}>Volver arriba</button>
            </section>
        </section>
    )
}

export default ProjectList;