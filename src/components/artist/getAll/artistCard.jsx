import './artistCard.css';



// COMPONENTE DE ARTISTA
function ArtistCard({ artist }) {

    //combina los datos del backend con los del frontend (los de arriba)
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
            {info.bio && <p className="artist__bio">{info.bio}</p>}
            <a href="#">Ir al perfil de {info.artistic_name}</a>
        </article>
    );
}

export default ArtistCard;
