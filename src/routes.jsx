import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/root/Root';

import CategoryList from './pages/category/categoryList';
import CategoryOne from './pages/category/categoryOne';
import ArtistList from './pages/artist/artistList';
import ProjectList from './pages/project/projectList';
import HomePage from './pages/home/Home';
import Auth from './pages/auth/Auth';

import { getAllCategories, getCategoryByName } from './utils/category';
import { getAllArtist } from './utils/artist';
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
                path: "/categorias/:category_name",
                element: <CategoryOne />,
                loader: getCategoryByName
            },
            {
                path: "/artistas",
                element: <ArtistList />,
                loader: getAllArtist
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