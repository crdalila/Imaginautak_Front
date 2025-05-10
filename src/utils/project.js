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
// GET ARTIST IMAGES
function getProjectImgs(project) {
    const imgField = project.project_imgs;

    // convertir el string de las fotos en array
    const imgArray = typeof imgField === 'string'
        ? imgField.split(',').map(filename => filename.trim()) // quitar espacios del string que recibimos de back
        : Array.isArray(imgField)
            ? imgField
            : [];

    return imgArray.map(filename => `${BASE_URL}/${filename.replace(/^public\//, '')}`);
}

export {
    getAllProject,
    getProjectById,
    getProjectImgs
}