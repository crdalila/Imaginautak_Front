import './App.css'
import { useEffect, useState } from 'react';

import CategoryList from '../src/components/category/categoryList';
import Navbar from '../src/components/navbar/Navbar';



function App() {
  const [route, setRoute] = useState("home");

  // Cambiar de rutas
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  const routes = {
    home : <h1>IMAGINAUTAK</h1>, //TODO home
    categorias: <CategoryList  onRouteChange={handleRouteChange}/>,
  }
  return (
    <>
      <Navbar route={route} onRouteChange={handleRouteChange}/>
      {routes[route]}
    </>
  )
}

export default App;