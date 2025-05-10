import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { saveToken, removeToken, saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";
import { login, register, logout } from "../utils/auth";


const AuthContext = createContext({
    userData: null,
    onLogin: async () => {}, //para que lo lea como async
    onLogout: () => {},
    onRegister: async () => {}
});

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    
    //cargar los datos del usuario al inicio si existe
    useEffect(() => {
        const savedUserData = getFromLocalStorage("userData");
        if (savedUserData) {
            setUserData(savedUserData);
        }
    }, []);
    

    // Registro
    const handleRegister = async (username, email, password, role) => {
        try {
            const result = await register(username, email, password, role);
            if (result.error) {
                return result.error;
            } else {
                if (result.token) { //si existe token, lo guarda
                    saveToken(result.token);
                }
                if (result.user) { //y si existe user guarda sus datos
                    setUserData(result.user);
                    saveToLocalStorage("userData", result.user);
                }
                
                navigate("/");
                return null;
            }
        } catch (error) {
            console.error("Error en el registro:", error);
            return "Error al procesar el registro";
        }
    };

    // Login
    const handleLogin = async (email, password) => {
        try {
            const result = await login(email, password);
            if (result.error) {
                removeToken();
                return result.error;
            } else {
                if (result.token) { //si existe token, lo guarda
                    saveToken(result.token);
                }
                if (result.user) {
                    setUserData(result.user);
                    saveToLocalStorage("userData", result.user);
                }
                
                navigate("/");
                return null;
            }
        } catch (error) {
            console.error("Error en el login:", error);
            return "Error al procesar el inicio de sesión";
        }
    }

    // LogOut
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Error en logout:", error);
        } finally {
            //siempre limpia los datos locales independientemente de la respuesta del servidor
            removeToken();
            localStorage.removeItem("userData");
            setUserData(null);
            navigate("/");
        }
    }

    return (
        <AuthContext.Provider value={{
            userData: userData, 
            onLogin: handleLogin, 
            onLogout: handleLogout, 
            onRegister: handleRegister
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}