import { Link } from "react-router-dom";

import './navbarFilters.css';
function NavbarFilters (){

    return (
        <nav>
            <ul className="nav">
                <li className={"nav__button"}>
                    <button>
                        <Link to="/categorias">
                            Categorías
                        </Link>
                    </button>
                </li>
                <li className={"nav__button"}>
                    <button>
                        <Link to="/artistas">
                            Artistas
                        </Link>
                    </button>
                </li>
                <li className={"nav__button"}>
                    <button>
                        <Link to="/proyectos">
                            Proyectos
                        </Link>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarFilters;