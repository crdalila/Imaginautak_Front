import { Link } from 'react-router-dom';

import { getProjectImgs } from '../../utils/project';
import './ProjectSmallCard.css';

function ProjectSmallCard({ project }) {
    const images = getProjectImgs(project);
    const firstImage = images.length > 0 ? images[0] : null;

    return (
        <Link to={`/proyectos/${project.project_id}`}>
            <article className="previewCard previewCard__project">

                <section className="previewCard__project-text">
                    <h2 className="previewCard__project-text-title previewCard__title">{project.title}</h2>
                    {project.artists.length > 0 ? (
                        project.artists.map(artist => (
                            <p key={artist.artist_id} className="previewCard__project-text-artist">{artist.artistic_name}</p>
                        ))
                    ) : (
                        <p className="previewCard__project-text-artist">Sin artistas asociados</p>
                    )}
                </section>
                {firstImage && (
                    <section className="previewCard__artist-img previewCard__project-img">
                        <img src={firstImage} alt={project.title} />
                    </section>
                )}
            </article>
        </Link>
    );
}

export default ProjectSmallCard;
