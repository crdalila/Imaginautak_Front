import { getArtistImgs } from "../../utils/artist";
import { Link } from "react-router-dom";

function ArtistCard({ artist }) {
    const images = getArtistImgs(artist);
    const firstImage = images.length > 0 ? images[0] : null;

    return (
        <Link to={`/artistas/${artist.artist_id}`}>
            <article className="card artist__card">

                {firstImage && (
                    <section className="artist__card-img">
                        <img src={firstImage} alt={artist.artistic_name} />
                    </section>
                )}

                <section className="artist__card-text">
                    <h2 className="artist__card-title">{artist.artistic_name}</h2>
                    <p className="artist__card-bio">{artist.bio}</p>
                </section> 

            </article>
        </Link>
    );
}

export default ArtistCard;