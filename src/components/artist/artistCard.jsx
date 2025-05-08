import { Link } from 'react-router-dom';

import './artistCard.css';

// COMPONENTE DE ARTISTA
function ArtistCard({ artist }) {

    return (
        <Link to ={`/artistas/${artist.artist_id}`}>
            <article className="card artist__card">

                <section className="artist__card-img">
                    <img src={artist.img} alt={artist.artistic_name} />
                </section>
                
                <section className="artist__card-text">
                    <h2 className="artist__card-title">{artist.artistic_name}</h2>
                    <p className="artist__card-bio">{artist.bio}</p>
                </section> 

            </article>
        </Link>
    );
}

export default ArtistCard;
