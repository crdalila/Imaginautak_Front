import { useState, useEffect, useContext, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ButtonBack from '../../components/button/buttonBack';
import CategoryCard from '../../components/category/CategoryCard';
import './projectOne.css';

// PÁGINA DE UN PROYECTO
function ProjectOne() {
	const defaultProject = useLoaderData();
	const [project, setProject] = useState(defaultProject.error ? null : defaultProject);
	const [error, setError] = useState(null);
	if (!project) {
		return <p>Proyecto no encontrado</p>
	}

	//renderizado
	return (
		<article className="projectOne getAll">

			<section className="button_back">
				<ButtonBack />
			</section>

			<section className="ProjectOne__header getAll__header">
                <h1 className="ProjectOne__header-title">{project.title}</h1>
            </section>

			<section className='projectOne__artists'>
				<p>Un proyecto de: </p>
				{project.artists.map(artist => (
						<Link to={`/artistas/${artist.artist_id}`} key={artist.artist_id}>
							{artist.artistic_name}
						</Link>
					))}
			</section>

			<section className="One__follows projectOne__follows">
                <p>Fans: {project.favorites_count}</p>
            </section>

			<section className="ProjectOne__data One_data">
                <section className={"ArtistOne__img"}>
                    <img src={artist.img} alt={artist.artistic_name} />
                </section>
                <p className="One_data ArtistOne__data-bio">{artist.bio}</p>
            </section>



			<p className="projectOne__description">{project.description}</p>

			<div className="projectOne__img">
				<img src={project.project_imgs} alt={project.title} />
			</div>

			<section className="projectOne__categories">
				{project.categories.length === 0 ? (
					<p>No hay categorías disponibles para este proyecto</p>
				) : (
					project.categories.map(category => (
						<div className="projectOne__categories-oneCategory" key={category.category_id}>
							<CategoryCard category={category} />
						</div>
					))
				)}
			</section>
		</article>
	);
}

export default ProjectOne;
