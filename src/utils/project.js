import fetchData from "./fetch.js";

// GET ALL PROJECTS
async function getAllProject(){
    const projects = await fetchData("/proyectos")
    return projects;
}

// GET PROJECT BY ID
async function getProjectById(project_id){
    const project = await fetchData(`/proyectos/${project_id}`)
    return project;
}

export {
    getAllProject,
    getProjectById
}