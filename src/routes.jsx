import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/root/Root';

import CategoryList from './pages/category/categoryList';
import CategoryOne from './pages/category/categoryOne';

import ArtistList from './pages/artist/artistList';
import ArtistOne from './pages/artist/artistOne';

import ProjectList from './pages/project/projectList';
import ProjectOne from './pages/project/projectOne';
import NewProject from './pages/project/newProject';

import HomePage from './pages/home/Home';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { getAllCategories, getCategoryById } from './utils/category';
import { getAllArtist, getArtistById } from './utils/artist';
import { createProject, getAllProject, getProjectById } from './utils/project';

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: async () => {
                    const [categories, artists, projects] = await Promise.all([
                      getAllCategories(),
                      getAllArtist(),
                      getAllProject()
                    ]);
                    return { categories, artists, projects };
                  }
            },
            {
                path: "categorias",
                element: <CategoryList />,
                loader:getAllCategories
            },
            {
                path: "/categorias/:id",
                element: <CategoryOne />,
                loader: async ({params}) => getCategoryById(params.id) //tiene que sacar el id de esta forma
            },
            {
                path: "/artistas",
                element: <ArtistList />,
                loader: getAllArtist
            },
            {
                path: "/artistas/:id",
                element: <ArtistOne />,
                loader: async ({params}) => getArtistById(params.id) //tiene que sacar el id de esta forma
            },
            {
                path: "/proyectos",
                element: <ProjectList />,
                loader: getAllProject
            },
            {
                path: "/proyectos/:id",
                element: <ProjectOne />,
                loader: async ({params}) => getProjectById(params.id)
            },
            {
                path: "/proyectos/crear",
                element: <NewProject />,
                loader: getAllCategories
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registro",
                element: <Register />,
            }
        ]
    },
    
])

export default router;