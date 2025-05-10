import fetchData from "./fetch.js";

// LOGIN
async function login (email, password) {
    if (!email || !email.includes("@")) {
        return { error: "El email no es válido" };
    }
    if (!password) {
        return { error: "Tienes que introducir una contraseña" };
    }
    const data = {
        email,
        password
    }
    const result = await fetchData("/login", "POST", data);
    return result;
}

// REGISTRO
async function register(username, email, password) {
    // Control de errores
    if (!username || username.trim() === "") {
        return { error: "El nombre de usuario es obligatorio" };
    }
    if (!email || !email.includes("@")) {
        return { error: "El email no es válido" };
    }
    if (!password) {
        return { error: "Tienes que introducir una contraseña" };
    }

    const data = {
        username,
        email,
        password,
        role: "user"  //valor por defecto "user"
    }
    
    console.log("Iniciando registro con:", { username, email, role: "user" });
    const result = await fetchData("/registro", "POST", data);
    
    if (result.error) {
        console.error("Error en registro:", result);
    } else {
        console.log("¡Te has registrado correctamente!", { usuario: result.user?.username || "desconocido" });
    }
    
    return result;
}

// LOGOUT
async function logout () {
    const result = await fetchData("/logout", "POST");
    return result;
}

export {
    login,
    register,
    logout
}