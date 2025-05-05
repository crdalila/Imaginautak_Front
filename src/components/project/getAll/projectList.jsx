import { useState, useEffect, useContext, useRef } from "react";

import ProjectCard from "./projectCard";
import { getAllProject } from "../../../utils/project";
import RouteContext from "../../../context/RouteContext";
import './projectList.css';
import App from "../../../App";


function ProjectList({preview = false}){
    // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
    const [projects, setProjects] = useState([]); //empieza con una lista vacía
    const {onRouteChange} = useContext(RouteContext);
    const firstProjectRef = useRef(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        handleLoadProjects();
    },[])
    // función que carga los proyectos
    const handleLoadProjects = async () => {
        const data  = await getAllProject();
        if (data.error) {
            setError(data.error);
        } else {
            setProjects(data); //si todo va bien, lo guarda en projects
        }
    }

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