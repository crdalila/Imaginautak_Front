import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";

import ArtistCard from "../../components/artist/artistCard";
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
        <section className="artist__getAll">
            <h1>Artistas</h1>
            <p>Encuentra artistas a quienes seguir entre nuestra lista de artistas registrados</p>
            {error && <p className="error"> {error}</p>}
            <section className="artist__getAll-cards">
                {artists.length == 0 && <p>No hay artistas disponibles</p>}
                <div className={preview ? "artist__carousel" : ""}>
                    {artists
                        .slice(0, preview ? 5 : artists.length)
                        .map (artist => (
                            <div className={preview ? "artist__carousel-item" : ""} key={artist.artist_id}>
                                    <ArtistCard artist={artist} preview={preview} />
                            </div> 
                    ))}
                </div>
                <button className={preview ? "artist__preview-buttonUp" : "artist__buttonUp"} onClick={handleScrollToTop}>Volver arriba</button>
            </section>
        </section>
    )
}

export default ArtistList;