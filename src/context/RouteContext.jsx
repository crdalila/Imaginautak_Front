import { createContext } from "react";

// DEFINIR EL CONTEXTO (ruta por defecto)
const RouteContext = createContext({
    route: "home",
    onRouteChange: () => {},
});

export default RouteContext;
