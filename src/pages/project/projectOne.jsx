import { useState, useEffect, useContext, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ButtonBack from '../../components/button/buttonBack';
import { getProjectImgs } from '../../utils/project';
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

			<section className='ProjectOne__artists'>
				<p>Un proyecto de: </p>
				{project.artists.map(artist => (
					<Link to={`/artistas/${artist.artist_id}`} key={artist.artist_id}>
						{artist.artistic_name}
					</Link>
				))}
			</section>

			<section className="One__follows ProjectOne__follows">
				<p>Fans: {project.favorites_count}</p>
			</section>

			<section className="ProjectOne__imgs ArtistOne_imgs">
				<section className={"ProjectOne__img"}>
					{getProjectImgs(project).map((imgUrl, index) => (
						<img key={index} src={imgUrl} alt={`${project.title} ${index + 1}`} />
					))}
				</section>
				<section className="ProjectOne__video">
					<section className="ProjectOne__video">
						{project.project_video && /^(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=)/.test(project.project_video) && (
							<iframe
								src={`https://www.youtube.com/embed/${new URL(project.project_video).searchParams.get("v")}`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						)}
					</section>
				</section>

				<section className="ProjectOne__data One_data">
					<p className="ProjectOne__data-title">{project.title}</p>
					<p className="ProjectOne__description">Descripción: {project.description}</p>
					{project.trigger_warnings && (
						<p className="ProjectOne__warnings">Contenido sensible: {project.trigger_warnings}</p>
					)
					}
				</section>

				<section className="ProjectOne__categories">
					{project.categories.length === 0 ? (
						<p>No hay categorías disponibles para este proyecto</p>
					) : (
						<>
							<p>Categorías: </p>
							{project.categories.map(category => (
								<button className="project__card-category" key={category.category_id}>
									<Link to={`/categorias/${category.category_id}`}>
										{category.category_name}
									</Link>
								</button>
							))}
						</>
					)}
				</section>
			</section>
		</article >
	);
}

export default ProjectOne;
