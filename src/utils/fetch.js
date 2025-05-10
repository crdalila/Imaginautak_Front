import { getToken } from "../utils/localStorage";

const BASE_URL = "http://localhost:3000";

async function fetchData(route, method="GET", data=null) {
    const url = BASE_URL + route;
    const token = getToken(); // para iniciar sesión
    const options = { // tipo postman
        method: method,
        headers: {} // headers base
    };
    
    //solo añadir Authorization si el token existe
    if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    }
    
    if (data) {
        options.headers["Content-Type"] = "application/json"; // para indicar que es json
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        const responseData = await response.json(); // variable para almacenar los datos en JSON
        if (!response.ok) { // ok es 200, si no ha sido exitosa, saca un error con el status correspondiente
            responseData.status = response.status;
        }
        return responseData;
    } catch (error) {
        console.error("Error de fetch", error);
        return { error: "Error al hacer el fetch de los datos" }; // retornamos un error si ocurre un problema
    }
}

export default fetchData;