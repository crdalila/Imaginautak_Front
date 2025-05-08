import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import './artistOne.css';
import ButtonBack from '../../components/button/buttonBack';
import ProjectCard from '../../components/project/projectCard';

// PÁGINA DE UN ARTISTA
function ArtistOne() {
    const defaultArtist = useLoaderData();
    const [artist, setArtist] = useState(defaultArtist.error ? null : defaultArtist); //empieza con una lista vacía
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

            <section className="ArtistOne__header getAll__header">
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
                <h2>Redes sociales</h2>
                <section className="ArtistOne__links-rrss">
                    {artist.website && (
                        <a href={artist.website} target="_blank" className="button_rrss">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24px" height="24px">
                                <path fill="#ce7240" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg>
                        </a>
                    )}
                    {artist.social_media_01 && (
                        <a href={artist.social_media_01} target="_blank" className="button_rrss">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24px" height="24px">
                                <path fill="#ce7240" d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z" /></svg>
                        </a>
                    )}
                    {artist.social_media_02 && (
        
                        <a href={artist.social_media_02} target="_blank" className="button_rrss">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24px" height="24px">
                                <path fill="#ce7240" d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z" /></svg>
                        </a>
                    )}
                </section>
            </section>


            <section className="ArtistOne__projects">
                <h2 className="ArtistOne__projects-title">Proyectos</h2>
                {artist.projects.length === 0 && <p>Este arista todavía no tiene proyectos publicados</p>}
                {artist.projects.map(project => (
                    <div className="ArtistOne_projects-card" key={project.project_id}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </section>
        </article>
    )
}

export default ArtistOne;
