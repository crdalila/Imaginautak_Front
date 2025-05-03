import './App.css'
import { useEffect, useState } from 'react';

import CategoryList from '../src/components/category/getAll/categoryList';
import ArtistList from '../src/components/artist/getAll/artistList';
import ProjectList from '../src/components/project/getAll/projectList';
import HomePage from '../src/components/home/Home';



function App() {
  const [route, setRoute] = useState("home");

  // Cambiar de rutas
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  const routes = {
    home: <HomePage onRouteChange={handleRouteChange}/>,
    categorias: <CategoryList  onRouteChange={handleRouteChange}/>,
    artistas: <ArtistList  onRouteChange={handleRouteChange}/>,
    proyectos: <ProjectList  onRouteChange={handleRouteChange}/>
  }
  return (
    <>
      {routes[route]}
    </>
  )
}

export default App;