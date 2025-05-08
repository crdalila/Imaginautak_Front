import { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

// LOGIN Y REGISTRO
function Auth({ }) {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const { onLogin } = useContext(AuthContext);

    const handleUserPassword = (e) => {
        const newPassword = e.target.value;
        console.log("user password", newPassword)
        const newState = { ...userData, password: newPassword }
        setUserData(newState);
    }
    const handleUserEmail = (e) => {
        const newEmail = e.target.value;
        console.log("user Email", newEmail)
        const newState = { ...userData, email: newEmail }
        setUserData(newState);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // sin formulario controlado, sacariamos los datos de los inputs
        console.log("login", userData);
        const result = await onLogin(userData.email, userData.password);
        setError(result);
    }
    return (
        <section className="auth__login">
            <h1>Inicia sesión</h1>
            <p className="error">{error}</p>
            <form className="auth__login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" value={userData.email} onChange={handleUserEmail} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleUserPassword} />
                <button>Acceder</button>
            </form>
            <p>¿No tienes una cuenta? </p><a href="#">Regístrate</a>
        </section>
    )
}

export default Auth;