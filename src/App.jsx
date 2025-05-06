import './App.css'
import { useEffect, useState } from 'react';

import CategoryList from './pages/category/categoryList';
import ArtistList from './pages/artist/artistList';
import ProjectList from './pages/project/projectList';
import HomePage from './pages/home/Home';
import Auth from './pages/auth/Auth';
import RouteContext from './context/RouteContext';
import { AuthProvider } from './context/AuthContext';



function App() {
  const [route, setRoute] = useState("home");

  // Cambiar de rutas
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  const routes = {
    home: <HomePage onRouteChange={handleRouteChange}/>,
    login: <Auth />,
    categorias: <CategoryList  onRouteChange={handleRouteChange}/>,
    artistas: <ArtistList  onRouteChange={handleRouteChange}/>,
    proyectos: <ProjectList  onRouteChange={handleRouteChange}/>
  }

  return (
    <>
      <RouteContext value={{ route: route, onRouteChange: handleRouteChange }} >
        <AuthProvider>
          {routes[route]}
        </AuthProvider>
      </RouteContext>
    </>
  )

}

export default App;