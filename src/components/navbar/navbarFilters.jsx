import { NavLink } from "react-router-dom";

import './navbarFilters.css';
function NavbarFilters (){

    return (
        <nav>
            <ul className="nav">
                <li className={"nav__button"}>
                    <button>
                        <NavLink to="/categorias">
                            Categorías
                        </NavLink>
                    </button>
                </li>
                <li className={"nav__button"}>
                    <button>
                        <NavLink to="/artistas">
                            Artistas
                        </NavLink>
                    </button>
                </li>
                <li className={"nav__button"}>
                    <button>
                        <NavLink to="/proyectos">
                            Proyectos
                        </NavLink>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarFilters;