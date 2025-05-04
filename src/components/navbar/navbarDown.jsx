import './navbarDown.css';
function NavbarDown ({route, onRouteChange}){

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