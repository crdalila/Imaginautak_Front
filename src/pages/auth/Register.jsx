import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import ButtonBack from "../../components/button/buttonBack";

// LOGIN Y REGISTRO
function Register({ }) {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const { onRegister } = useContext(AuthContext);

    const handleUserPassword = (e) => {
        const newPassword = e.target.value;
        const newState = { ...userData, password: newPassword }
        setUserData(newState);
    }
    const handleUserEmail = (e) => {
        const newEmail = e.target.value;
        const newState = { ...userData, email: newEmail }
        setUserData(newState);
    }

    const handleUsername = (e) => {
        const newUsername = e.target.value;
        const newState = { ...userData, username: newUsername }
        setUserData(newState);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // sin formulario controlado, sacariamos los datos de los inputs
        console.log("login", userData);
        const result = await onRegister(userData.username, userData.email, userData.password);
        setError(result);
    }
    return (
        <section className="login getAll">

            <section className="button_back">
                <ButtonBack />
            </section>

            <section className="getAll__header">
                <h1>Registro</h1>
                <p className="error">{error}</p>
            </section>

            <form className="login__form" onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" name="username" id="username" value={userData.username} onChange={handleUsername} />
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" value={userData.email} onChange={handleUserEmail} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleUserPassword} />
                <button>Regístrate</button>
            </form>
            <section className="login__register">
                <p>¿Ya tienes una cuenta? </p>
                <Link to="/login">Inicia sesión</Link>
            </section>
        </section>
    )
}

export default Register;