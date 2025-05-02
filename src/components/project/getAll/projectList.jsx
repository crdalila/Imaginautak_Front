import { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import { getAllProject } from "../../../utils/project";
import './projectList.css';
import App from "../../../App";


function ProjectList({onRouteChange}){
    // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
    const [projects, setProjects] = useState([]); //empieza con una lista vacía
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
    // renderizado:
    return (
        <section className="project__getAll">
            <h1>Proyectos</h1>
            <p>Encuentra proyectos para favoritear en nuestra lista de proyectos</p>
            {error && <p className="error"> {error}</p>}
            <section className="project__getAll-cards">
                {projects.length == 0 && <p>No hay proyectos disponibles</p>}
                {projects.map (project => {
                    return <ProjectCard project={project} key={project.project_id} /> 
                })
                }
            </section>
        </section>
    )
}

export default ProjectList;