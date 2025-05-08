import fetchData from "./fetch.js";

async function login (email, password) {
    const data = {
        email,
        password
    }
    const result = await fetchData("/login", "POST", data);
    return result;
}

async function register (username, email, password, role) {
    const data = {
        username,
        email,
        password,
        role
    }
    const result = await fetchData("/registro", "POST", data);
    return result;
}

export {
    login,
    register
}