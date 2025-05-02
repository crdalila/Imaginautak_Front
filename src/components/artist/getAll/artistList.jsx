import { useState, useEffect } from "react";
import ArtistCard from "./artistCard";
import { getAllArtist } from "../../../utils/artist";
import './artistList.css';
import App from "../../../App";


function ArtistList({onRouteChange}){
    // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
    const [artists, setArtists] = useState([]); //empieza con una lista vacía
    const [error, setError] = useState(null);
    useEffect(()=>{
        handleLoadArtists();
    },[])
    // función que carga los artistas
    const handleLoadArtists = async () => {
        const data  = await getAllArtist();
        if (data.error) {
            setError(data.error);
        } else {
            setArtists(data); //si todo va bien, lo guarda en categories
        }
    }
    // renderizado:
    return (
        <section className="artist__getAll">
            <h1>Artistas</h1>
            <p>Encuentra artistas a quienes seguir entre nuestra lista de artistas registrados</p>
            {error && <p className="error"> {error}</p>}
            <section className="artist__getAll-cards">
                {artists.length == 0 && <p>No hay artistas disponibles</p>}
                {artists.map (artist => {
                    return <ArtistCard artist={artist} key={artist.artist_id} /> 
                })
                }
            </section>
        </section>
    )
}

export default ArtistList;