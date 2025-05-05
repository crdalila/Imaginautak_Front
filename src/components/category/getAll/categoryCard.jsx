import './categoryCard.css';

// AGREGAMOS DATOS DE CATEOGRÍA ADICIONALES.
// lo hacemos aquí y no en la bbdd porque no nos interesa que la bbdd guarde esto
const categoryExtraInfo = {
    music: {
        category_name: "Música",
        category_description: "Bandas, grupos, cantantes en solitario, personas que componen, que tocan instrumentos, etc.",
        category_image: "/images/category_imgs/music-solid.svg" },
    theatre: {
        category_name: "Teatro",
        category_description: "feñsafjñelajfeañfea.afa jsiñf asjifñoa fjo jaj añjf a",
        category_image: "/images/category_imgs/masks-theater-solid.svg" },
    dance: {
        category_name: "Danza",
        category_description: "dafdafeñ dklñsjf e eieieieiieeieeiieieieieieeiie",
        category_image: "/images/category_imgs/shoe-prints-solid.svg" },
    performance: {
        category_name: "Performance",
        category_description: "Artes performáticas",
        category_image: "/images/category_imgs/mask-solid.svg" },
    comedy_show: {
        category_name: "Comedia",
        category_description: "Monólogos, comedias, improvisaciones, etc, cualquier disciplina que haga conectar con el público a través del humor",
        category_image: "/images/category_imgs/face-grin-tears-solid.svg" },
    illustration: {
        category_name: "Ilustración",
        category_description: "Dibujos, ilustraciones, digitales o no, etc.",
        category_image: "/images/category_imgs/print-solid.svg" },
    photography: {
        category_name: "Fotografía",
        category_description: "La perspectiva del mundo que nos rodea a través de la fotografía estática",
        category_image: "/images/category_imgs/camera.svg" },
    painting: {
        category_name: "Pintura",
        category_description: "Dibujos sobre lienzo o cualquier papel, distintas técnicas de pintura",
        category_image: "/images/category_imgs/palette-solid.svg"},
    sculpture: {
        category_name: "Escultura",
        category_description: "El poder de las manos para crear arte en tres dimensiones",
        category_image: "/images/category_imgs/building.svg" },
    graphic_design: {
        category_name: "Diseño gráfico",
        category_description: "Arte gráfico aplicado a la comunicación visual",
        category_image: "/images/category_imgs/arrow.svg" },
    poetry: {
        category_name: "Poesía",
        category_description: "La belleza de las palabras para expresar emociones y pensamientos",
        category_image: "/images/category_imgs/scroll-solid.svg" },
    literature: {
        category_name: "Literatura",
        category_description: "El arte de escribir blablabla escribes esto escribes aquello este es tu lugar, déjate embriagar por las palabras",
        category_image: "/images/category_imgs/pen-nib-solid.svg" },
    cinema: {
        category_name: "Cine",
        category_description: "Imágenes en movimiento, desde ficción a documental, en todos sus formatos",
        category_image: "/images/category_imgs/clapperboard.svg" },
    animation: {
        category_name: "Animación",
        category_description: "Stop motion, animación digital, animación tradicional,",
        category_image: "/images/category_imgs/arrow.svg" },
    video_art: {
        category_name: "Vídeo arte",
        category_description: "Cuando el vídeo no solo cuenta una historia, sino que crea una realidad",
        category_image: "/images/category_imgs/video-solid.svg" },
    ceramics: {
        category_name: "Cerámica",
        category_description: "dadfjsal  djlsañe jae-j jelejekljflsdñfjf e",
        category_image: "/images/category_imgs/mug-saucer-solid.svg" },
    jewelry: {
        category_name: "Joyería",
        category_description: "Joyas hechas a mano con distintos materiales, desde los más comunes a los más exoticos",
        category_image: "/images/category_imgs/ring-solid.svg" },
    textile_art: {
        category_name: "Textil",
        category_description: "Diseño de moda, fabricación de prendas propias, crochet, distintas técnicas de tejido",
        category_image: "/images/category_imgs/vest-patches-solid.svg" },
    handmade_crafts: {
        category_name: "Manualidades",
        category_description: "Cualquier objeto hecho a mano, desde el mas simple hasta el mas complejo",
        category_image: "/images/category_imgs/stapler-solid.svg" },
    activism: {
        category_name: "Activismo",
        category_description: "Capacidad de expresar mediante un discurso que se convierte en una acción",
        category_image: "/images/category_imgs/microphone-solid.svg" },
    other: {
        category_name: "Otros",
        category_description: "Para todas aquellas disciplinas que no encajan en una etiqueta específica. Al fin y al cabo, el arte es arte en todas sus formas.",
        category_image: "/images/category_imgs/handheart.svg" },
};


// COMPONENTE DE CATEGORIA
function CategoryCard({ category, preview = false }) {
    //para que no tenga en cuenta las _, que en la bbdd no están y da error
    const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_");

    //combina los datos del backend con los del frontend (los de arriba)
    const info = {
        name: categoryExtraInfo[normalizedKey]?.category_name || "Categoría sin nombre",
        description: categoryExtraInfo[normalizedKey]?.category_description || "Sin descripción", //busca en extrainfo si hay ese name, si lo hay, usa esa descripción
        image: categoryExtraInfo[normalizedKey]?.category_image || "/images/default.jpg"
    };

    return (
        <article className={`${preview ? "category__preview" : ""}`}>
            <section className={`${preview ? "category__preview__main" : "category__main"}`}>
                <section className={`${preview ? "category__preview__text" : "category__text"}`}>
                    <h2 className={`${preview ? "category__preview__text-title" : "category__text-title"}`}>{info.name}</h2>
                    {info.description && <p className={`${preview ? "category__preview__text-description" : "category__text-description"}`}>{info.description}</p>}
                </section>
                <section className={`${preview ? "category__preview__img" : "category__img"}`}>
                    <img src={info.image} alt={info.name} />
                </section>
            </section>
            <a className={`${preview ? "category__preview__vermas" : "category__vermas"}`} href={`/categorias/${category.category_name}`}>Ver todos los proyectos de {info.name}</a>
        </article>
    );
}

export default CategoryCard;
