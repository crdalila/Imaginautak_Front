import { Link } from 'react-router-dom';
import './CategorySmallCard.css';

// DATOS EXTRA DEL CATEGORY (que no necesitamos en la bbdd)
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

function CategorySmallCard({ category }) {
    //para que no tenga en cuenta las _, que en la bbdd no están y da error
    const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_");

    //combina los datos del backend con los del frontend (los de arriba)
    const info = {
        id: category.category_id,
        name: categoryExtraInfo[normalizedKey]?.category_name || "Categoría sin nombre", //busca en extrainfo si hay ese name, si lo hay, usa el nombre específico de extrainfo
        description: categoryExtraInfo[normalizedKey]?.category_description || "Sin descripción", //busca en extrainfo si hay ese name, si lo hay, usa la descripción
        image: categoryExtraInfo[normalizedKey]?.category_image || "/images/category_imgs/compass.svg",
    };

    return (
        <Link to={`/categorias/${info.id}`}>
            <article className="previewCard previewCard__category">
                
                <h2 className="previewCard__title">{info.name}</h2>

                <section className="previewCard__img previewCard__category-img">
                    <img src={info.image} alt={info.name} />
                </section>
            
            </article>
        </Link>
    );
}

export default CategorySmallCard;
