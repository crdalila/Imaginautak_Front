import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { saveToken, removeToken } from "../utils/localStorage";
import { login } from "../utils/auth";


const AuthContext = createContext({
    userData: {},
    onLogin: async () => {}, //para que lo lea como async
    onLogout: () => {}
});

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    
    // Login
    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if (result.error) {
            removeToken();
            return result.error;
        } else {
            setUserData(result.user);
            saveToken(result.token);
            navigate("/")
            return null;
        }
    }

    // LogOut
    const handleLogout = () => {
        removeToken();
        setUserData(null);
        navigate("/");
    }

    return (
        <AuthContext value={{userData:userData, onLogin:handleLogin, onLogout:handleLogout}}>
            {children}
        </AuthContext>
    )
}

export {
    AuthContext,
    AuthProvider
}