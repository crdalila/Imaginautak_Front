import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import './navbarDown.css';

// NAVBAR FIJO EN LA PARTE DE ABAJO DE LA APP
function NavbarDown({ }) {
    const { onLogout, userData } = useContext(AuthContext);

    return (
        <nav>
            <ul className="nav__down">

                <li className={"nav__down-button"} >
                    <button>
                        < NavLink to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#ce7240" height="24px" width="24px">
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                        </NavLink>
                        <p>Inicio</p>
                    </button>
                </li>

                {userData?.role === "artist" && (
                    <li className={"nav__down-button"} >
                            < NavLink to="/proyectos/crear">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ce7240" height="47px" width="47px">
                                    <path fill="#ce7240" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                            </NavLink>
                    </li>
                )}

                {userData ? (
                    <li className={"nav__down-button"} >
                        <button>
                            <NavLink to={`/artistas/${userData.user_id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ce7240" height="24px" width="24px">
                                    <path fill="#ce7240" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                                <p>Perfil</p>
                            </NavLink>
                        </button>
                    </li>
                ) : (
                    <li className={"nav__down-button"} >
                        < NavLink to="/login">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ce7240" height="24px" width="24px">
                                    <path fill="#ce7240" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                                <p>Login</p>
                            </button>
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavbarDown;