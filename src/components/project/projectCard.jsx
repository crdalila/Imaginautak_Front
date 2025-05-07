import { Link } from 'react-router-dom';

import './projectCard.css';

// CAMBIO EN LOS NOMBRES DE CATEGORÍA
const categoryNameChange = {
    musica: {
        category_name: "Música",
    },
    teatro: {
        category_name: "Teatro",
    },
    danza: {
        category_name: "Danza",
    },
    performance: {
        category_name: "Performance",
    },
    comedia: {
        category_name: "Show de comedia",
    },
    ilustracion: {
        category_name: "Ilustración",
    },
    fotografia: {
        category_name: "Fotografía",
    },
    dibujo: {
        category_name: "Dibujo",
    },
    escultura: {
        category_name: "Escultura",
    },
    diseño_grafico: {
        category_name: "Diseño gráfico",
    },
    poesia: {
        category_name: "Poesía",
    },
    literatura: {
        category_name: "Literatura",
    },
    cine: {
        category_name: "Cine",
    },
    animacion: {
        category_name: "Animación",
    },
    video_arte: {
        category_name: "Vídeo arte",
    },
    ceramica: {
        category_name: "Cerámica",
    },
    joyeria: {
        category_name: "Joyería",
    },
    textil: {
        category_name: "Textil",
    },
    artesania: {
        category_name: "Artesanía",
    },
    activismo: {
        category_name: "Activismo",
    },
    otra: {
        category_name: "Otra",
    },
};


// COMPONENTE DE PROYECTO
function ProjectCard({ project, preview = false }) {

    //especifica los datos que necesitamos de project
    const info = {
        project_id: project.project_id || "Proyecto sin id",
        title: project.title || "Proyecto sin título",
        description: project.description || "Sin descripción",
        project_imgs: project.project_imgs || [],
        categories: project.categories || [],
        artists: project.artists || [],
    };

    //renderizado:
    return (
        <article className="project">
            <section className="project__text">
                <h2 className="project__text-title">{info.title}</h2>
                {info.artists.length > 0 ? (
                    info.artists.map(artist => (
                        <Link to ={`/artistas/${project.artists.artist_id}`} key={artist.artist_id} className="project__text-artist">
                            {artist.artistic_name}
                        </Link>

                    ))
                ) : (
                    <p className="project__text-artist">Sin artistas asociados</p>
                )}
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
                <Link to={`/proyectos/${info.project_id}`} className={`${preview ? "project__preview__vermas" : "project__vermas"}`}>
                    Ver el proyecto completo
               </Link>
            </section>
        </article>
    );
}

export default ProjectCard;
