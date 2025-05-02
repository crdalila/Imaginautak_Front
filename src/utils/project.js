import fetchData from "./fetch.js";

// GET ALL PROJECTS
async function getAllProject(){
    const projects = await fetchData("/proyectos")
    return projects;
}

export {
    getAllProject
}