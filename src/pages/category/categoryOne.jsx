import { useState, useEffect, useContext, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

import ProjectCard from '../../components/project/projectCard';
import ButtonBack from '../../components/button/buttonBack';
import './categoryOne.css';

// DATOS EXTRA
const categoryExtraInfo = {
	musica: {
		category_name: "Música",
		category_description: "Bandas, solistas, compositores, instrumentistas.",
		category_image: "/images/category_imgs/music-solid.svg"
	},
	teatro: {
		category_name: "Teatro",
		category_description: "Interpretación escénica en todas sus formas.",
		category_image: "/images/category_imgs/masks-theater-solid.svg"
	},
	danza: {
		category_name: "Danza",
		category_description: "Movimiento corporal como forma de expresión artística.",
		category_image: "/images/category_imgs/shoe-prints-solid.svg"
	},
	performance: {
		category_name: "Performance",
		category_description: "Acciones artísticas en vivo e interdisciplinarias.",
		category_image: "/images/category_imgs/mask-solid.svg"
	},
	comedia: {
		category_name: "Comedia",
		category_description: "Humor a través de monólogos, improvisación o escena.",
		category_image: "/images/category_imgs/face-grin-tears-solid.svg"
	},
	ilustracion: {
		category_name: "Ilustración",
		category_description: "Arte visual en formato digital o tradicional.",
		category_image: "/images/category_imgs/print-solid.svg"
	},
	fotografia: {
		category_name: "Fotografía",
		category_description: "Captura visual del entorno y emociones.",
		category_image: "/images/category_imgs/camera.svg"
	},
	dibujo: {
		category_name: "Dibujo",
		category_description: "Expresión artística con lápiz, tinta o pintura.",
		category_image: "/images/category_imgs/palette-solid.svg"
	},
	escultura: {
		category_name: "Escultura",
		category_description: "Creación tridimensional con diversos materiales.",
		category_image: "/images/category_imgs/building.svg"
	},
	diseño_grafico: {
		category_name: "Diseño gráfico",
		category_description: "Comunicación visual a través de gráficos y formas.",
		category_image: "/images/category_imgs/pen-ruler-solid.svg"
	},
	poesia: {
		category_name: "Poesía",
		category_description: "Versos que expresan sentimientos y pensamientos.",
		category_image: "/images/category_imgs/scroll-solid.svg"
	},
	literatura: {
		category_name: "Literatura",
		category_description: "Narrativa, ensayo, relato o cualquier forma escrita.",
		category_image: "/images/category_imgs/pen-nib-solid.svg"
	},
	cine: {
		category_name: "Cine",
		category_description: "Ficción o documental en formato audiovisual.",
		category_image: "/images/category_imgs/clapperboard.svg"
	},
	animacion: {
		category_name: "Animación",
		category_description: "Movimiento creado cuadro a cuadro, en cualquier técnica.",
		category_image: "/images/category_imgs/arrow.svg"
	},
	video_arte: {
		category_name: "Vídeo arte",
		category_description: "Creaciones audiovisuales con enfoque artístico.",
		category_image: "/images/category_imgs/video-solid.svg"
	},
	ceramica: {
		category_name: "Cerámica",
		category_description: "Creación artística con barro, arcilla u otros materiales.",
		category_image: "/images/category_imgs/mug-saucer-solid.svg"
	},
	joyeria: {
		category_name: "Joyería",
		category_description: "Diseño y creación de piezas únicas y hechas a mano.",
		category_image: "/images/category_imgs/ring-solid.svg"
	},
	textil: {
		category_name: "Textil",
		category_description: "Diseño, tejido, moda y técnicas textiles.",
		category_image: "/images/category_imgs/vest-patches-solid.svg"
	},
	artesania: {
		category_name: "Artesanía",
		category_description: "Creaciones hechas a mano con técnicas tradicionales.",
		category_image: "/images/category_imgs/stapler-solid.svg"
	},
	activismo: {
		category_name: "Activismo",
		category_description: "Arte como medio de expresión política o social.",
		category_image: "/images/category_imgs/microphone-solid.svg"
	},
	otra: {
		category_name: "Otros",
		category_description: "Proyectos que rompen etiquetas o combinan disciplinas.",
		category_image: "/images/category_imgs/handheart.svg"
	},
};

function CategoryOne({ }) {

	const defaultCategory = useLoaderData();
	const [category, setCategory] = useState(defaultCategory.error ? null : defaultCategory);
	if (!category) {
		return <p>Categoría no encontrada</p>
	}
	const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_");

	const info = {
		name: categoryExtraInfo[normalizedKey]?.category_name || category.category_name,
		description: categoryExtraInfo[normalizedKey]?.category_description || "Sin descripción",
		image: categoryExtraInfo[normalizedKey]?.category_image || "/images/category_imgs/compass.svg"
	};

	const projectNumber = category.projects.length;

	// renderizado:
	return (
		<article className="categoryOne getAll">

			<section className="button_back">
                <ButtonBack />
            </section>

			<section className="categoryOne__header getAll__header">
				<h1 className="categoryOne__header-title">{info.name}</h1>
			</section>

			<section className="categoryOne__main">
				<p className="categoryOne__description">{info.description}</p>
				<div className="categoryOne__img">
					<img src={info.image} alt={info.name} />
				</div>
			</section>

			<section className="categoryOne__projects ArtistOne__projects">
				<h2 className="categoryOne__projects-title ArtistOne__projects-title">Proyectos de {info.name}</h2>	
				<p className="categoryOne__projects-number">{projectNumber} proyecto(s) disponible(s)</p>
				{category.projects.length === 0 ? (
					<p>Todavía no hay proyectos de esta categoría</p>
				) : (
					category.projects.map(project => (
						<div className="categoryOne__projects-card" key={project.project_id}>
							<ProjectCard project={project} />
						</div>
					))
				)}
			</section>
		</article>
	);
}

export default CategoryOne;
