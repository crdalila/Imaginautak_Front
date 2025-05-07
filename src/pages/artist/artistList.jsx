import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import ArtistCard from "../../components/artist/artistCard";
import ButtonBack from "../../components/button/buttonBack";
import NavbarFilters from "../../components/navbar/navbarFilters";
import './artistList.css';


function ArtistList({ preview = false, initialData = null }) {
    const loaderData = useLoaderData(); //solo se activa si hay loader, si no viene de home
    const [artists, setArtists] = useState(initialData || loaderData || []); //utiliza initialData si viene de Home, loaderData si viene de CategoryList
    const [error, setError] = useState(null);
    const firstArtistRef = useRef(null);
    
    useEffect(() => {
        if (!initialData && !loaderData) {
            //si no viene nada, haz el fetch manual
            fetch('/artistas')
                .then(res => res.json())
                .then(data => setArtists(data))
                .catch(err => console.error(err));
        }
    }, []);
    // función que hace scroll
    const handleScrollToTop= ()=>{
        firstArtistRef.current.scrollIntoView({behavior: 'smooth'})
    }

    // renderizado:
    return (
        <section className="artists getAll">
            
            <section className="button_back">
                <ButtonBack />
            </section>

            <div ref={firstArtistRef}></div>
            
            <section className="artists__header getAll__header">
                <h1>Artistas</h1>
                <ol>
                    <li>Persona dotada de la capacidad o habilidad necesarias para alguna de las bellas artes.</li>
                    <li>Persona que actúa profesionalmente en un espectáculo teatral, cinematográfico, circense, etc., interpretando ante el público.
                    </li>
                </ol>
                <p>Puede que no lo diga la RAE, pero un artista es aquella persona que dedica su tiempo, esfuerzo e inspiración a la creación de obras artísticas. Es <s>probable</s> posible que no te paguen por ello, puede que no tengas un talento innato (nadie lo tiene, el talento es dedicación y constancia), pero tú sigues con ello. Sigues con tu obra, sigues creando por amor al arte. Y eso, <i>eso</i>, te convierte en <strong>artista</strong>.</p>
                {error && <p className="error"> {error}</p>}
            </section>

            <section className="getAll__navbar-filters">
                <NavbarFilters />
            </section>

            <section className="artist__cards">
                {artists.length == 0 && <p>No hay artistas disponibles</p>}
                
                {artists.map (artist => (
                    <div className="artist__cards-card">
                        <ArtistCard artist={artist} />
                    </div> 
                ))}
            </section>

            <button className="buttonUp" onClick={handleScrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24px" height="24px">
                <path fill="#ce7240" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                </svg>
            </button>
        
        </section>
    )
}

export default ArtistList;