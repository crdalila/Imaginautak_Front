import { Link } from 'react-router-dom';

import './artistCard.css';

// COMPONENTE DE ARTISTA
function ArtistCard({ artist, preview = false }) {

    const info = {
        artist_id: artist.artist_id || "Artista sin id",
        artistic_name: artist.artistic_name || "Artista sin nombre",
        img: artist.img || "/images/default.jpg",
        bio: artist.bio || "Sin biografía",
    };

    return (
        <article className="artist">
            <section className="artist__img">
                <img src={info.img} alt={info.artistic_name} />
            </section>
            <h2 className="artist__title">{info.artistic_name}</h2>
            <p className="artist__bio">{info.bio}</p>
            <Link to ={`/artistas/${artist.artist_id}`} className="artist__vermas">
                Ir al perfil de {info.artistic_name}
            </Link>
        </article>
    );
}

export default ArtistCard;
