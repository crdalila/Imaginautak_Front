import { Outlet } from "react-router-dom";

import NavbarDown from "../../components/navbar/navbarDown";
import { AuthProvider } from "../../context/AuthContext";

function Root() {
    return (
        <AuthProvider>
            <header>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                < NavbarDown />
            </footer>
        </AuthProvider>
    )
}

export default Root;