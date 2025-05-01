import './categoryCard.css';

// AGREGAMOS DATOS DE CATEOGRÍA ADICIONALES.
// lo hacemos aquí y no en la bbdd porque no nos interesa que la bbdd guarde esto
const categoryExtraInfo = {
    music: {
        category_description: "Bandas, grupos, cantantes en solitario, personas que componen, que tocan instrumentos, etc.",
        category_image: "/images/category_music.jpg" },
    theatre: {
        category_description: "feñsafjñelajfeañfea.afa jsiñf asjifñoa fjo jaj añjf a",
        category_image: "/images/category_music.jpg" },
    dance: {
        category_description: "dafdafeñ dklñsjf e eieieieiieeieeiieieieieieeiie",
        category_image: "/images/category_music.jpg" },
    performance: {
        category_description: "Artes performáticas",
        category_image: "/images/category_music.jpg" },
    comedy_show: {
        category_description: "Monólogos, comedias, improvisaciones, etc, cualquier disciplina que haga conectar con el público a través del humor",
        category_image: "/images/category_music.jpg" },
    illustration: {
        category_description: "Dibujos, ilustraciones, digitales o no, etc.",
        category_image: "/images/category_music.jpg" },
    photography: {
        category_description: "La perspectiva del mundo que nos rodea a través de la fotografía estática",
        category_image: "/images/category_music.jpg" },
    painting: {
        category_description: "Dibujos sobre lienzo o cualquier papel, distintas técnicas de pintura",
        category_image: "/images/category_music.jpg" },
    sculpture: {
        category_description: "El poder de las manos para crear arte en tres dimensiones",
        category_image: "/images/category_music.jpg" },
    graphic_design: {
        category_description: "Arte gráfico aplicado a la comunicación visual",
        category_image: "/images/category_music.jpg" },
    poetry: {
        category_description: "La belleza de las palabras para expresar emociones y pensamientos",
        category_image: "/images/category_music.jpg" },
    literature: {
        category_description: "El arte de escribir blablabla escribes esto escribes aquello este es tu lugar, déjate embriagar por las palabras",
        category_image: "/images/category_music.jpg" },
    cinema: {
        category_description: "Imágenes en movimiento, desde ficción a documental, en todos sus formatos",
        category_image: "/images/category_music.jpg" },
    animation: {
        category_description: "Stop motion, animación digital, animación tradicional,",
        category_image: "/images/category_music.jpg" },
    video_art: {
        category_description: "Cuando el vídeo no solo cuenta una historia, sino que crea una realidad",
        category_image: "/images/category_music.jpg" },
    ceramics: {
        category_description: "dadfjsal  djlsañe jae-j jelejekljflsdñfjf e",
        category_image: "/images/category_music.jpg" },
    jewelry: {
        category_description: "Joyas hechas a mano con distintos materiales, desde los más comunes a los más exoticos",
        category_image: "/images/category_music.jpg" },
    textile_art: {
        category_description: "Diseño de moda, fabricación de prendas propias, crochet, distintas técnicas de tejido",
        category_image: "/images/category_music.jpg" },
    handmade_crafts: {
        category_description: "Cualquier objeto hecho a mano, desde el mas simple hasta el mas complejo",
        category_image: "/images/category_music.jpg" },
    activism: {
        category_description: "Capacidad de expresar mediante un discurso que se convierte en una acción",
        category_image: "/images/category_music.jpg" },
    other: {
        category_description: "Para todas aquellas disciplinas que no encajan en una etiqueta específica. Al fin y al cabo, el arte es arte en todas sus formas.",
        category_image: "/images/category_music.jpg" },
};


// COMPONENTE DE CATEGORIA
function CategoryCard({ category }) {
    //combina los datos del backend con los del frontend (los de arriba)
    const info = {
        name: category.category_name,
        description: categoryExtraInfo[category.category_name]?.category_description || "Sin descripción", //busca en extrainfo si hay ese name, si lo hay, usa esa descripción
        image: categoryExtraInfo[category.category_name]?.category_image || "/images/default.jpg"
    };

    return (
        <article className="category">
            <h2 className="category__title">{info.name}</h2>
            {info.description && <p className="category__description">{info.description}</p>}
            <img src={info.image} alt={info.name} />
            <a href="#">Ver todos los proyectos de {info.name}</a>
        </article>
    );
}

export default CategoryCard;
