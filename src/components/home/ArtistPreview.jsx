import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import ArtistSmallCard from "./ArtistSmallCard";
import './ArtistPreview.css';


function ArtistPreview({ initialData = null }) {
    const loaderData = useLoaderData(); //solo se activa si hay loader, si no viene de home
    const [artists, setArtists] = useState(initialData || loaderData || []); //utiliza initialData si viene de Home, loaderData si viene de CategoryList
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!initialData && !loaderData) {
            //si no viene nada, haz el fetch manual
            fetch('/artistas')
                .then(res => res.json())
                .then(data => setArtists(data))
                .catch(err => console.error(err));
        }
    }, []);

    // renderizado:
    return (
        <section className="preview preview__artist">
            
            <section className="preview__header preview__artist-header">
                <h1>Artistas</h1>
                <p>Encuentra artistas a quienes seguir entre nuestra lista de artistas registrados</p>
                {error && <p className="error"> {error}</p>}
            </section>
            
            <section className="preview__artist-cards preview__carousel">
                {artists.length == 0 && <p>No hay artistas disponibles</p>}
                    {artists.map (artist => (
                        <div className="preview__artist-card preview__carousel-item" key={artist.artist_id}>
                            <ArtistSmallCard artist={artist} />
                        </div> 
                    ))}
            </section>

        </section>
    )
}

export default ArtistPreview;