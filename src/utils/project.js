import fetchData from "./fetch.js";

const BASE_URL = "http://localhost:3000";

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

// GET PROJECT IMAGES
function getProjectImgs(project){
    const url = BASE_URL + `/images/` + project.project_imgs;
    return url;
}

export {
    getAllProject,
    getProjectById,
    getProjectImgs
}