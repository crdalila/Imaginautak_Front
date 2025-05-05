import './App.css'
import { useEffect, useState } from 'react';

import CategoryList from '../src/components/category/getAll/categoryList';
import ArtistList from '../src/components/artist/getAll/artistList';
import ProjectList from '../src/components/project/getAll/projectList';
import HomePage from '../src/components/home/Home';
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