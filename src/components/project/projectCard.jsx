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
function ProjectCard({ project }) {
    
    //renderizado:
    return (
        <article className="card project__card">

            <section className="project__text">
                <section className="project__text-title-complete">
                    <h2 className="project__text-title">{project.title}</h2>
                    <Link to={`/proyectos/${project.project_id}`} className="project__text-vermas">
                        Ver más
                    </Link>
                </section>

                <section className="project__text-artists">
                    {project.artists?.map(artist => (
                        <Link to={`/artistas/${artist.artist_id}`} key={artist.artist_id} className="project__text-artist">
                            {artist.artistic_name}
                        </Link>
                    ))}
                </section>
            </section>

            <section className="project__img">
                {project.project_imgs && (
                    <img src={project.project_imgs} alt={project.title} />
                )}
            </section>

            <section className="project__description">
                {project.description && (
                    <p>Descripción: {project.description}</p>
                )}
            </section>
            
            <section className="project__card-categories">
                {project.categories && (
                    <p>Categoría(s):</p>
                )}
                {project.categories?.map(category => (
                    /* const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_"); */
                    <button className="project__card-category" key={category.category_id}>
                        <Link to={`/categorias/${category.category_id}`} key={category.category_id}>
                            {category.category_name}
                        </Link>
                    </button>
                ))}
            </section>

        </article>
    );
}

export default ProjectCard;
