import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import './artistOne.css';
import ButtonBack from '../../components/button/buttonBack';
import ProjectCard from '../../components/project/projectCard';

// PÁGINA DE UN ARTISTA
function ArtistOne() {
    const defaultArtist = useLoaderData();
    const [artist, setArtist] = useState(defaultArtist.error? null : defaultArtist); //empieza con una lista vacía
    const [error, setError] = useState(null);
    if (!artist) {
        return <p>Artista no encontrado</p>
    }

    const projectNumber = artist.projects.length;
    
    // renderizado:
    return (
        <article className="ArtistOne getAll">

            <section className="button_back">
                <ButtonBack />
            </section>
            
            <section className="One__header getAll__header">
                <h1 className="ArtistOne__header-title">{artist.artistic_name}</h1>
            </section>

            <section className="ArtistOne__follows">
                <p>Proyectos: {projectNumber}</p>
                <p>Seguidores: {artist.followers_count}</p>
            </section>
            
            <section className="ArtistOne__data One_data">
                <section className={"ArtistOne__img"}>
                    <img src={artist.img} alt={artist.artistic_name} />
                </section>
                <p className="One_data ArtistOne__data-bio">{artist.bio}</p>
            </section>


            <section className="ArtistOne__links">
                <button className="button_rrss">
                    Web
                </button>
                <button className="button_rrss">
                    RRSS 1
                </button>
                <button className="button_rrss">
                    RRSS 2
                </button>
            </section>
            
            <section className="ArtistOne__projects">
                {artist.projects.length === 0 && <p>Este arista todavía no tiene proyectos publicados</p>}
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
