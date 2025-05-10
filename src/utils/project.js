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


// CREATE PROJECT
async function createProject(projectData) {
    // Verificamos si projectData es una instancia de FormData
    // para manejar la subida de archivos correctamente
    if (projectData instanceof FormData) {
        // Para FormData necesitamos un método de fetch específico sin Content-Type
        // ya que el navegador lo establecerá automáticamente con el boundary correcto
        const url = `${BASE_URL}/proyectos`;
        
        // Obtenemos el token de autenticación
        const token = localStorage.getItem("token");
        let tokenParsed = null;
        
        try {
            tokenParsed = token ? JSON.parse(token) : null;
        } catch (error) {
            console.error("Error al parsear el token:", error);
        }
        
        const options = {
            method: "POST",
            headers: {}
        };
        
        // Añadimos el token de autorización si existe
        if (tokenParsed) {
            options.headers["Authorization"] = `Bearer ${tokenParsed}`;
        }
        
        // Añadimos el FormData como body (sin establecer Content-Type)
        options.body = projectData;
        
        try {
            console.log("Enviando proyecto con imágenes...");
            const response = await fetch(url, options);
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error al crear proyecto:", errorData);
                return { 
                    error: errorData.message || `Error ${response.status}: ${response.statusText}`,
                    status: response.status 
                };
            }
            
            const result = await response.json();
            console.log("Proyecto creado exitosamente:", result);
            return result;
        } catch (error) {
            console.error("Error en la petición:", error);
            return { error: "Error al crear el proyecto" };
        }
    } else {
        // Si no es FormData, usamos el fetchData normal
        return await fetchData("/proyectos", "POST", projectData);
    }
}

// EDIT PROJECT
async function updateProject(id, projectData) {
    // Similar a createProject, manejar FormData si es necesario
    if (projectData instanceof FormData) {
        const BASE_URL = "http://localhost:3000";
        const url = `${BASE_URL}/projects/${id}`;
        
        const token = localStorage.getItem("token");
        let tokenParsed = null;
        
        try {
            tokenParsed = token ? JSON.parse(token) : null;
        } catch (error) {
            console.error("Error al parsear el token:", error);
        }
        
        const options = {
            method: "PUT",  // o PATCH según tu API
            headers: {}
        };
        
        if (tokenParsed) {
            options.headers["Authorization"] = `Bearer ${tokenParsed}`;
        }
        
        options.body = projectData;
        
        try {
            const response = await fetch(url, options);
            
            if (!response.ok) {
                const errorData = await response.json();
                return { 
                    error: errorData.message || `Error ${response.status}: ${response.statusText}`,
                    status: response.status 
                };
            }
            
            return await response.json();
        } catch (error) {
            console.error("Error en la petición:", error);
            return { error: "Error al actualizar el proyecto" };
        }
    } else {
        return await fetchData(`/proyectos/${project_id}`, "PUT", projectData);
    }
}

// REMOVE PROJECT
async function removeProject(project_id){
    const response = await fetchData(`/proyectos/${project_id}`, "DELETE");
    return response;
}

export {
    getAllProject,
    getProjectById,
    getProjectImgs,
    createProject,
    updateProject,
    removeProject
}