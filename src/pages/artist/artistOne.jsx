import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import './artistOne.css';
import ProjectCard from '../../components/project/projectCard';

// PÁGINA DE UN ARTISTA
function ArtistOne({preview = false }) {
        const defaultArtist = useLoaderData();
        // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
        const [artist, setArtist] = useState(defaultArtist.error? null : defaultArtist); //empieza con una lista vacía
        const [error, setError] = useState(null);
        
        // renderizado:
        return (
            <article className="ArtistOne">
                <section className="ArtistOne__header">
                    <h2 className="ArtistOne__header-title">{artist.artistic_name}</h2>
                    {artist.description && <p className="ArtistOne__header-description">{artist.bio}</p>}
                    <section className={"ArtistOne__img"}>
                        <img src={artist.imgs} alt={artist.artistic_name} />
                    </section>
                </section>
                <section className="ArtistOne__projects">
                    {artist.projects.length === 0 && <p>No hay proyectos disponibles</p>}
                    {artist.projects.map (project => {
                        <div className="ArtistOne_projects-card">
                            <ProjectCard project={project} key={project.project_id} />
                        </div>
                    })},
                </section>
            </article>
        )
    }
    
export default ArtistOne;
