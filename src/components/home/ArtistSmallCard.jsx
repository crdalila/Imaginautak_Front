import { Link } from 'react-router-dom';

import './ArtistSmallCard.css';

function ArtistSmallCard({ artist }) {

    return (
        <Link to ={`/artistas/${artist.artist_id}`}>
            <article className="previewCard previewCard__artist">
                <section className="previewCard__img previewCard__artist-img">
                    <img src={artist.img} alt={artist.artistic_name} />
                </section>
                <h2 className="previewCard__title previewCard__artist-title">{artist.artistic_name}</h2>
            </article>
        </Link>
    );
}

export default ArtistSmallCard;
