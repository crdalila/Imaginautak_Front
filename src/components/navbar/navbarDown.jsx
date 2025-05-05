import { useContext } from 'react';

import RouteContext from '../../context/RouteContext';
import { AuthContext } from '../../context/AuthContext';
import './navbarDown.css';

// NAVBAR FIJO EN LA PARTE DE ABAJO DE LA APP
function NavbarDown ({}){
    const {route, onRouteChange} = useContext(RouteContext);
    const {onLogout} = useContext(AuthContext);

    // TODO que depende de si es login o logout salga una cosa u otra
    return (
        <nav>
            <ul className="nav__down">
                <li className={"nav__down-button " + (route === "home" ? "active" : "") } >
                    <button onClick={() => onRouteChange("home")}>Home</button>
                </li>
                <li className={"nav__down-button " + (route === "login" ? "active" : "") }>
                    <button onClick={() => onRouteChange("login")}>Inicia sesión</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarDown;