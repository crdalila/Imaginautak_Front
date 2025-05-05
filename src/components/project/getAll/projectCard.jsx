import './projectCard.css';
import App from "../../../App";

// CAMBIO EN LOS NOMBRES DE CATEGORÍA
const categoryNameChange = {
    music: {
        category_name: "Música",
    },
    theatre: {
        category_name: "Teatro",
    },
    dance: {
        category_name: "Danza",
    },
    performance: {
        category_name: "Performance",
    },
    comedy_show: {
        category_name: "Show de comedia",
    },
    illustration: {
        category_name: "Ilustración",
    },
    photography: {
        category_name: "Fotografía",
    },
    painting: {
        category_name: "Pintura",
    },
    sculpture: {
        category_name: "Escultura",
    },
    graphic_design: {
        category_name: "Diseño gráfico",
    },
    poetry: {
        category_name: "Poesía",
    },
    literature: {
        category_name: "Literatura",
    },
    cinema: {
        category_name: "Cine",
    },
    animation: {
        category_name: "Animación",
    },
    video_art: {
        category_name: "Vídeo arte",
    },
    ceramics: {
        category_name: "Cerámica",
    },
    jewelry: {
        category_name: "Joyería",
    },
    textile_art: {
        category_name: "Textil",
    },
    handmade_crafts: {
        category_name: "Manualidades",
    },
    activism: {
        category_name: "Activismo",
    },
    other: {
        category_name: "Otros",
    },
};


// COMPONENTE DE PROYECTO
function ProjectCard({ project, preview = false }) {

    //especifica los datos que necesitamos de project
    const info = {
        project_id: project.project_id || "Proyecto sin id",
        title: project.title || "Proyecto sin título",
        description: project.description || "Sin descripción",
        project_imgs: project.project_imgs || "/images/default.jpg",
        categories: project.categories || "Sin categorías",
        artists: project.artists || "Sin artistas asociados",
    };

    //renderizado:
    return (
        <article className="project">
            <section className="project__text">
                <h2 className="project__text-title">{info.title}</h2>
                {info.artists.map(artist => (
                    <a key={artist.artist_id} className="project__text-artist" href="#">
                        {artist.artistic_name}
                    </a>
                ))}
            </section>

            <section className="project__img">
                {(info.project_imgs === 1) ? <img src={info.project_imgs} alt={info.title} /> : <img src={info.project_imgs[0]} alt={info.title} />}
            </section>

            {info.description && <p className="project__description">{info.description}</p>}

            <section className={`${preview ? "project__preview__links" : "project__links"}`}>
                <section className="project__links-categories">
                {info.categories.map(category => {
                    const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_");
                    return (
                        <button onClick={() => onRouteChange("#")} key={category.category_id}>
                            {categoryNameChange[normalizedKey]?.category_name || category.category_name}
                        </button>
                    );
                })}
                </section>
                <a href="#">Ver el proyecto completo</a>
            </section>
        </article>
    );
}

export default ProjectCard;
