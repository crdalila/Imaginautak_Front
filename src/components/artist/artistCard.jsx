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
        <article className={`${preview ? "artist__preview" : "artist"}`}>
            <section className={`${preview ? "artist__preview__img" : "artist__img"}`}>
                <img src={info.img} alt={info.artistic_name} />
            </section>
            <h2 className={`${preview ? "artist__preview__title" : "artist__title"}`}>{info.artistic_name}</h2>
            {info.bio && <p className={`${preview ? "artist__preview__bio" : "artist__bio"}`}>{info.bio}</p>}
            <Link to ={`/artistas/${artist.artist_id}`} className={`${preview ? "artist__preview__vermas" : "artist__vermas"}`}>
            Ir al perfil de {info.artistic_name}
            </Link>
        </article>
    );
}

export default ArtistCard;
