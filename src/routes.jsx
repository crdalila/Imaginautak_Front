import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/root/Root';

import CategoryList from './pages/category/categoryList';
import CategoryOne from './pages/category/categoryOne';
import ArtistList from './pages/artist/artistList';
import ArtistOne from './pages/artist/artistOne';
import ProjectList from './pages/project/projectList';
import HomePage from './pages/home/Home';
import Auth from './pages/auth/Auth';

import { getAllCategories, getCategoryById } from './utils/category';
import { getAllArtist, getArtistById } from './utils/artist';
import { getAllProject } from './utils/project';

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
                path: "/login",
                element: <Auth />,
            }
        ]
    },
    
])

export default router;