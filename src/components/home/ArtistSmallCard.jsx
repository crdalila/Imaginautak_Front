import { Link } from 'react-router-dom';

import { getArtistImgs } from '../../utils/artist';

import './ArtistSmallCard.css';

function ArtistSmallCard({ artist }) {
    const images = getArtistImgs(artist);
    const firstImage = images.length > 0 ? images[0] : null;

    return (
        <Link to ={`/artistas/${artist.artist_id}`}>
            <article className="previewCard previewCard__artist">
            {firstImage && (
                    <section className="previewCard__artist-img">
                        <img src={firstImage} alt={artist.artistic_name} />
                    </section>
                )}
                <h2 className="previewCard__title previewCard__artist-title">{artist.artistic_name}</h2>
            </article>
        </Link>
    );
}

export default ArtistSmallCard;
