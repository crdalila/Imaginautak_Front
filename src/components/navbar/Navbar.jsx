import './Navbar.css';
function Navbar ({route, onRouteChange}){

    return (
        <nav>
            <ul className="nav">
                <li className={"nav__button " + (route === "home" ? "active" : "") } >
                    <button onClick={() => onRouteChange("home")}>Home</button>
                </li>
                <li className={"nav__button " + (route === "categorias" ? "active" : "") }>
                    <button onClick={() => onRouteChange("categorias")}>Categorías</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;