import './artistCard.css';

// COMPONENTE DE ARTISTA
function ArtistCard({ artist, preview = false }) {

    //combina los datos del backend con los del frontend (los de arriba)
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
            <a className={`${preview ? "artist__preview__vermas" : "artist__vermas"}`} href="#">Ir al perfil de {info.artistic_name}</a>
        </article>
    );
}

export default ArtistCard;
