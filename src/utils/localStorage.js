// GESTIÓN DE TOKENS DE LOCAL STORAGE

// Guarda si no es undefined
function saveToLocalStorage(key, value) {
    //solo guardar valores que no sean undefined o null
    if (value !== undefined && value !== null) {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.removeItem(key); //si es null o undefined elimina la key
    }
}

// Obtiene el valor de localStorage
function getFromLocalStorage(key, defaultValue = null) {
    const result = localStorage.getItem(key);
    if (result) {
        try {
            return JSON.parse(result); //intentamos parsear el valor
        } catch (error) {
            console.error(`Error al parsear: ${key}`, error);
            localStorage.removeItem(key);//si hay error de parseo, eliminar la key corrupta
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

// Elimina la key de localStorage
function removeFromLocalStorage(key){
    localStorage.removeItem(key);
}


// TOKEN

// Guarda el token si existe
function saveToken(token) {
    if (token) {
        saveToLocalStorage("token", token);
    }
}

// Consigue el token
function getToken(){
    return getFromLocalStorage("token", null);
}

// Elimina el token
function removeToken(){
    removeFromLocalStorage("token");
}



export {
    saveToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
    saveToken,
    getToken,
    removeToken
}