import './App.css'
import { useEffect, useState } from 'react';

import CategoryList from './components/category/getAll/categoryList';
import ArtistList from './components/artist/getAll/artistList';
import ProjectList from './components/project/getAll/projectList';
import HomePage from './components/home/Home';
import Auth from './components/auth/Auth';
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