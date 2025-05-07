import { getArtistByName } from '../../utils/category';
import ArtistCard from '../../components/artist/artistCard';
import './artistOne.css';


// PÁGINA DE UN ARTISTA
function ArtistOne({preview = false }) {
        // getter y setter: el primero es el estado actual, el segundo la función para actualizarlo
        const [artist, setArtist] = useState([]); //empieza con una lista vacía
        const firstArtistRef = useRef(null);
        const [error, setError] = useState(null);

        useEffect(()=>{
            handleLoadCategory();
        },[]) //??
        
        // función que carga las categorías (fetch)
        const handleLoadCategory = async () => {
            const data  = await getCategoryByName(category.category_name);
            if (data.error) {
                setError(data.error);
            } else {
                setCategory(data); //si todo va bien, lo guarda en category
            }
        }
        // función que hace scroll
        const handleScrollToTop= ()=>{
            firstArtistRef.current.scrollIntoView({behavior: 'smooth'})
        }
        //para que no tenga en cuenta las _, que en la bbdd no están y da error
        const normalizedKey = category.category_name.toLowerCase().replace(/ /g, "_");

        //combina los datos del backend con los del frontend (los de arriba)
        const info = {
            name: categoryExtraInfo[normalizedKey]?.category_name || "Categoría sin nombre",
            description: categoryExtraInfo[normalizedKey]?.category_description || "Sin descripción", //busca en extrainfo si hay ese name, si lo hay, usa esa descripción
            image: categoryExtraInfo[normalizedKey]?.category_image || "/images/default.jpg"
        };
    
        // renderizado:
        return (
            <article className="ArtistOne">
                <section className="ArtistOne__header">
                    <h2 className="ArtistOne__header-title">{info.name}</h2>
                    {info.description && <p className="ArtistOne__header-description">{info.description}</p>}
                    <section className={"ArtistOne__img"}>
                        <img src={info.image} alt={info.name} />
                    </section>
                </section>
                <section className="ArtistOne__projects">
                    <div ref={firstProjectRef}></div>
                    {projects.length === 0 && <p>No hay proyectos disponibles</p>}
                    {projects.map (project => {
                        <div className="ArtistOne_projects-card">
                            <ProjectCard project={project} key={project.project_id} />
                        </div>
                    })},
                    <button className="ArtistOne__projects-scrollButton" onClick={handleScrollToTop}>Volver arriba</button>
                </section>
            </article>
        )
    }
    
export default ArtistOne;
