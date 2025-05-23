import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import { createProject } from "../../utils/project";
import ButtonBack from "../../components/button/buttonBack";
import "./newProject.css";

// Opciones de trigger_warnings
const TRIGGER_WARNING_OPTIONS = [
	{ value: "violencia", label: "Violencia" },
	{ value: "abuso", label: "Abuso" },
	{ value: "drogas", label: "Drogas" },
	{ value: "muerte", label: "Muerte" },
	{ value: "salud_mental", label: "Salud mental" },
	{ value: "enfermedad", label: "Enfermedad" },
	{ value: "discriminación", label: "Discriminación" },
];

// Datos extra de Categoría
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


function NewProject() {
	const [projectData, setProjectData] = useState({
		title: "",
		description: "",
		trigger_warnings: "",
		project_url: "",
		project_imgs: [],
		project_video: "",
		created_at: new Date().toISOString().split('T')[0], //valor por defecto: fecha actual
		categoryIds: [],
	});

	const [selectedFiles, setSelectedFiles] = useState([]);
	const [previewUrls, setPreviewUrls] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);

	//obtener categorías del loader
	const categories = useLoaderData();
	const navigate = useNavigate();

	//generar previsualizaciones cuando se seleccionan archivos
	useEffect(() => {
		if (!selectedFiles.length) return;

		const newPreviewUrls = [];
		for (let i = 0; i < selectedFiles.length; i++) {
			const url = URL.createObjectURL(selectedFiles[i]);
			newPreviewUrls.push(url);
		}

		setPreviewUrls(newPreviewUrls);

		// Limpiar las URLs de previsualización cuando se desmonte el componente
		return () => {
			newPreviewUrls.forEach(url => URL.revokeObjectURL(url));
		};
	}, [selectedFiles]);

	// Cambios en los inputs
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProjectData(prev => ({ ...prev, [name]: value }));
	};

	// Checkbox de trigger_warnings
	const handleWarningsChange = (e) => {
		const { value, checked } = e.target;

		setProjectData(prev => {
			if (checked) {
				return { ...prev, trigger_warnings: [...prev.trigger_warnings, value] };
			} else {
				return {
					...prev,
					trigger_warnings: prev.trigger_warnings.filter(warning => warning !== value)
				};
			}
		});
	};

	// Seleccionar categorías
	const handleCategoriesChange = (e) => {
		const { value, checked } = e.target;
	
		setProjectData(prev => {
			if (checked) {
				return { ...prev, categoryIds: [...prev.categoryIds, value] };
			} else {
				return {
					...prev,
					categoryIds: prev.categoryIds.filter(cat => cat !== value)
				};
			}
		});
	};
	


	// Subida de imágenes
	const handleFileChange = (e) => {
		const files = Array.from(e.target.files);
		if (files.length > 10) {
			setError("Solo puedes subir un máximo de 10 imágenes");
			return;
		}
		setSelectedFiles(files);
	};

	// Envío de formulario
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			// Crear un FormData para enviar archivos
			const formData = new FormData();

			Object.keys(projectData).forEach(key => {
				if (key !== 'categoryIds' && key !== 'project_imgs') {
					formData.append(key, projectData[key]);
				}
			});
			
			// Añadir los categoryIds como un array compatible con multipart/form-data
			projectData.categoryIds.forEach(catId => {
				formData.append("categoryIds[]", catId);
			});
			

			// Añadir las imágenes seleccionadas
			selectedFiles.forEach(file => {
				formData.append('project_imgs', file);
			});

			const response = await createProject(formData);

			if (response.error) {
				setError(response.error);
			} else {
				navigate("/proyectos", { replace: true });
				console.log(response);
			}
		} catch (err) {
			setError("Error al crear el proyecto: " + (err.message || "Desconocido"));
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="newProject getAll">

			<section className="button_back">
				<ButtonBack />
			</section>

			<section className="newProject__header getAll__header">
				<h1 className="ProjectOne__header-title">Crea un nuevo proyecto</h1>
				<h2>Comparte tu arte</h2>
			</section>

			{error && <div className="error-message">{error}</div>}

			<form onSubmit={handleSubmit} className="newProject__form getAll__form">
				<div className="form-group">
					<label htmlFor="title">Título</label>
					<input
						type="text"
						name="title"
						id="title"
						value={projectData.title}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Descripción</label>
					<textarea
						name="description"
						id="description"
						value={projectData.description}
						onChange={handleInputChange}
						rows="5"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="trigger_warnings">Advertencia de contenido sensible*</label>
					<small>*Si tu proyecto tiene contenido sensible, específica a qué tipo pertenece. Si no tiene, deja esta opción en blanco</small>
					<select
						name="trigger_warnings"
						id="trigger_warnings"
						value={projectData.trigger_warnings}
						onChange={handleInputChange}
						onBlur={(e) => {
							if (e.target.value === "") {
								setProjectData(prev => ({ ...prev, trigger_warnings: "" }));
							}
						}}
					>
						<option value="">Ninguna</option>
						{TRIGGER_WARNING_OPTIONS.map(option => (
							<option key={option.value} value={option.value}>{option.label}</option>
						))}
					</select>
				</div>


				<div className="form-group">
					<label htmlFor="project_url">Web del proyecto</label>
					<input
						type="url"
						name="project_url"
						id="project_url"
						value={projectData.project_url}
						onChange={handleInputChange}
						placeholder="https://ejemplo.com"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="project_imgs">Imágenes*</label>
					<small>*Puedes subir hasta diez imágenes</small>
					<input
						type="file"
						name="project_imgs"
						id="project_imgs"
						onChange={handleFileChange}
						accept="image/*"
						multiple
						required
					/>

					{previewUrls.length > 0 && (
						<div className="image-previews">
							{previewUrls.map((url, index) => (
								<div key={index} className="preview-container">
									<img src={url} alt={`Vista previa ${index + 1}`} width="100" />
								</div>
							))}
						</div>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="project_video">URL del vídeo</label>
					<input
						type="url"
						name="project_video"
						id="project_video"
						value={projectData.project_video}
						onChange={handleInputChange}
						placeholder="https://youtube.com/watch?v=..."
					/>
				</div>

				<div className="form-group">
					<label htmlFor="categoryIds">Categorías del proyecto*</label>
					<small>*Escoge tantas categorías como consideres en las que encaje tu proyecto</small>
					<div className="checkbox-group">
						{categories.map(category => {
							const key = category.category_name.replace(/\s+/g, "_").toLowerCase();
							const label = categoryExtraInfo[key]?.category_name || category.category_name;

							return (
								<div key={category.category_id} className="checkbox-item">
									<input
										type="checkbox"
										id={`category-${category.category_id}`}
										name="categoryIds"
										value={category.category_id}
										checked={projectData.categoryIds.includes(String(category.category_id))}
										onChange={handleCategoriesChange}
									/>
									<label htmlFor={`category-${category.category_id}`}>
										{label}
									</label>
								</div>
							);
						})}
					</div>
				</div>


				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Creando..." : "Crear proyecto"}
				</button>

			</form>
		</div>
	);
}

export default NewProject;