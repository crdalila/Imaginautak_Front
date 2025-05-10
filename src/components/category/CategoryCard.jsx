import { Link } from 'react-router-dom';
import './CategoryCard.css';

// AGREGAMOS DATOS DE CATEOGRÍA ADICIONALES.
// lo hacemos aquí y no en la bbdd porque no nos interesa que la bbdd guarde esto
const categoryExtraInfo = {
    musica: {
        category_name: "Música",
        category_description: "Composición, interpretación y expresión sonora en todas sus formas.",
        category_image: "/images/category_imgs/music-solid.svg"
    },
    teatro: {
        category_name: "Teatro",
        category_description: "El arte de contar historias en escena a través de la actuación.",
        category_image: "/images/category_imgs/masks-theater-solid.svg"
    },
    danza: {
        category_name: "Danza",
        category_description: "Movimiento, ritmo y emoción expresados a través del cuerpo.",
        category_image: "/images/category_imgs/shoe-prints-solid.svg"
    },
    performance: {
        category_name: "Performance",
        category_description: "Acciones artísticas en vivo que cruzan disciplinas y provocan reflexión.",
        category_image: "/images/category_imgs/mask-solid.svg"
    },
    comedia: {
        category_name: "Comedia",
        category_description: "El arte de hacer reír y pensar a través del humor escénico.",
        category_image: "/images/category_imgs/face-grin-tears-solid.svg"
    },
    ilustracion: {
        category_name: "Ilustración",
        category_description: "Imágenes que comunican ideas, emociones o historias, en papel o digital.",
        category_image: "/images/category_imgs/print-solid.svg"
    },
    fotografia: {
        category_name: "Fotografía",
        category_description: "Capturar el mundo desde una mirada única y personal.",
        category_image: "/images/category_imgs/camera.svg"
    },
    dibujo: {
        category_name: "Dibujo",
        category_description: "Trazos que dan forma a ideas, emociones y mundos imaginarios.",
        category_image: "/images/category_imgs/palette-solid.svg"
    },
    escultura: {
        category_name: "Escultura",
        category_description: "Arte tridimensional que transforma materia en expresión.",
        category_image: "/images/category_imgs/building.svg"
    },
    diseño_grafico: {
        category_name: "Diseño gráfico",
        category_description: "Comunicación visual con intención y creatividad.",
        category_image: "/images/category_imgs/pen-ruler-solid.svg"
    },
    poesia: {
        category_name: "Poesía",
        category_description: "Palabras que condensan emoción, ritmo y belleza.",
        category_image: "/images/category_imgs/scroll-solid.svg"
    },
    literatura: {
        category_name: "Literatura",
        category_description: "El arte de narrar, imaginar y emocionar a través de la escritura.",
        category_image: "/images/category_imgs/pen-nib-solid.svg"
    },
    cine: {
        category_name: "Cine",
        category_description: "Narrativas visuales en movimiento, desde lo íntimo hasta lo épico.",
        category_image: "/images/category_imgs/clapperboard.svg"
    },
    animacion: {
        category_name: "Animación",
        category_description: "Dibujos y objetos que cobran vida en la pantalla.",
        category_image: "/images/category_imgs/arrow.svg"
    },
    video_arte: {
        category_name: "Vídeo arte",
        category_description: "Exploración visual experimental con el lenguaje audiovisual.",
        category_image: "/images/category_imgs/video-solid.svg"
    },
    ceramica: {
        category_name: "Cerámica",
        category_description: "Arte y técnica de modelar la tierra para crear belleza y función.",
        category_image: "/images/category_imgs/mug-saucer-solid.svg"
    },
    joyeria: {
        category_name: "Joyería",
        category_description: "Creación de piezas únicas que combinan arte y artesanía.",
        category_image: "/images/category_imgs/ring-solid.svg"
    },
    textil: {
        category_name: "Textil",
        category_description: "Diseño, tejido y confección como forma de expresión artística.",
        category_image: "/images/category_imgs/vest-patches-solid.svg"
    },
    artesania: {
        category_name: "Artesanía",
        category_description: "Creaciones hechas a mano que mezclan tradición y creatividad.",
        category_image: "/images/category_imgs/stapler-solid.svg"
    },
    activismo: {
        category_name: "Activismo",
        category_description: "Expresión artística con impacto social y político.",
        category_image: "/images/category_imgs/microphone-solid.svg"
    },
    otra: {
        category_name: "Otros",
        category_description: "Disciplinas híbridas o inclasificables, porque el arte no tiene límites.",
        category_image: "/images/category_imgs/handheart.svg"
    },
};


// COMPONENTE DE CATEGORIA
function CategoryCard({ category }) {
    //para que no tenga en cuenta las _, que en la bbdd no están y da error
    const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_");

    //combina los datos del backend con los del frontend (los de arriba)
    const info = {
        id: category.category_id,
        name: categoryExtraInfo[normalizedKey]?.category_name || "Categoría sin nombre",
        description: categoryExtraInfo[normalizedKey]?.category_description || "Sin descripción", //busca en extrainfo si hay ese name, si lo hay, usa esa descripción
        image: categoryExtraInfo[normalizedKey]?.category_image || "/images/category_imgs/compass.svg",
    };

    return (
        <Link to ={`/categorias/${info.id}`}>
            <article className="card category__card">
                
                <section className="category__img">
                    <img src={info.image} alt={info.name} />
                </section>

                <section className="category__text">
                    <h2 className="category__text-title">{info.name}</h2>
                    <p className="category__text-description">{info.description}</p>
                </section>
                
            </article>
        </Link>
    );
}

export default CategoryCard;
