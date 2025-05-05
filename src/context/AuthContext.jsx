import { createContext, useContext, useState } from "react";

import { saveToken, removeToken } from "../utils/localStorage";
import { login } from "../utils/auth";
import RouteContext from "./RouteContext";


const AuthContext = createContext({
    userData: {},
    onLogin : async () => {}, //para que lo lea como async
    onLogout: () => {}
});

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const {onRouterChange} = useContext(RouteContext);
    
    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if (result.error) {
            removeToken();
            return result.error;{onRouterChange} //TODOesto???
        } else {
            setUserData(result.user);
            saveToken(result.token);
            onRouterChange("home");
            return result;
        }
    }

    const handleLogout = () => {
        removeToken();
        setUserData(null);
        onRouterChange("home");
    }

    return (
        <AuthContext.Provider value={{userData:userData, onLogin:handleLogin, onLogout:handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}