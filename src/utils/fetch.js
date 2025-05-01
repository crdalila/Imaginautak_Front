//import { getToken } from "../localStorage";
const BASE_URL = "http://localhost:3000";

async function fetchData(route, method="GET", data=null) { //método y data por defecto, aunque no vaya a ser siempre ese
    const url = BASE_URL + route;
    //const token =  getToken(); //para iniciar sesión
    const options = { //tipo postman
        method : method,
        headers: {} //TODO mirarlo más a fondo jeje
    };
    /* if (token) {
        options.headers["Authorization"] = `Bearer ${token}`;
    } */
    if (data) {
        options.headers["Content-Type"] = "application/json"; //para indicar que es json
        options.body = JSON.stringify(data);
    }
    const response  = await fetch(url, options);
    const responseData = await response.json(); //variable para almacenar los datos
    if (!response.ok) { //ok es 200, si no ha sido exitosa, saca un error con el status correspondiente
        responseData.status = response.status;
    }
    return responseData;
}

export default fetchData;