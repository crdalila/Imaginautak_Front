import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import { createProject } from "../../utils/project";
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

function NewProject() {
	const [projectData, setProjectData] = useState({
		title: "",
		description: "",
		trigger_warnings: "",
		project_url: "",
		project_imgs: [],
		project_video: "",
		created_at: new Date().toISOString().split('T')[0], //valor por defecto: fecha actual
		categoriesIds: [],
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
		const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
		setProjectData(prev => ({ ...prev, categoriesIds: selectedOptions }));
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

			// Añadir todos los campos del proyecto
			Object.keys(projectData).forEach(key => {
				if (key === 'categoriesIds') { //para arrays, convertimos a JSON
					formData.append(key, JSON.stringify(projectData[key]));
				} else if (key !== 'project_imgs') { // No incluimos project_imgs aquí
					formData.append(key, projectData[key]);
				}
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
		<div className="create-project">
			<h1>Crear nuevo proyecto</h1>

			{error && <div className="error-message">{error}</div>}

			<form onSubmit={handleSubmit}>
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
					<label>Contenido sensible:</label>
					<div className="checkbox-group">
						{TRIGGER_WARNING_OPTIONS.map(option => (
							<div key={option.value} className="checkbox-item">
								<input
									type="checkbox"
									id={`warning-${option.value}`}
									name="trigger_warnings"
									value={option.value}
									checked={projectData.trigger_warnings.includes(option.value)}
									onChange={handleWarningsChange}
								/>
								<label htmlFor={`warning-${option.value}`}>{option.label}</label>
							</div>
						))}
					</div>
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
					<label htmlFor="project_imgs">Imágenes* (puedes subir hasta diez imágenes)</label>
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
					<label htmlFor="created_at">Fecha de creación</label>
					<input
						type="date"
						name="created_at"
						id="created_at"
						value={projectData.created_at}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="categoriesIds">Categorías del proyecto *</label>
					<select
						name="categoriesIds"
						id="categoriesIds"
						multiple
						value={projectData.categoriesIds}
						onChange={handleCategoriesChange}
						required
					>
						{categories && categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
					<small>Mantén presionada la tecla Ctrl (o Cmd en Mac) para seleccionar múltiples categorías</small>
				</div>

				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Creando..." : "Crear proyecto"}
				</button>
			</form>
		</div>
	);
}

export default NewProject;