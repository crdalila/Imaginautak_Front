import { useState, useEffect, useContext, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CategoryCard from '../../components/category/CategoryCard';
import './projectOne.css';

function ProjectOne() {
  const defaultProject = useLoaderData();
  const [project, setProject] = useState(defaultProject.error? null : defaultProject);
  if (!project) {
      return <p>Proyecto no encontrado</p>
  }

  return (
    <article className="projectOne">
      
      <h2 className="projectOne__header-title">{project.title}</h2>

      <p>Proyecto de </p><Link to={`/artistas/${project.artists.artist_id}`}>{project.artists.artistic_name}</Link>

      <p>Fans TODO despegable que se pueda ver quiénes son: {project.favorites_count}</p>
      
      <p className="projectOne__header-description">{project.description}</p>
      
      <div className="projectOne__img">
        <img src={project.project_imgs} alt={project.title} />
      </div>
      
      <section className="projectOne__categories">
        {project.categories.length === 0 ? (
          <p>No hay categorías disponibles para este proyecto</p>
        ) : (
          project.categories.map(category => (
            <div className="projectOne_category-card" key={category.category_id}>
              <CategoryCard category={category} />
            </div>
          ))
        )}
      </section>
    </article>
  );
}

export default ProjectOne;
