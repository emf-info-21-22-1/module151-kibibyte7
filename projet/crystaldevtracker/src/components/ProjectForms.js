import { useState } from "react";
import ProjectCtrl from "../app/ctrl/ProjectCtrl";

const ProjectForms = ({ onClose, loadProjects }) => {

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {

        //Vérifier les champs
        e.preventDefault();

        const projectCtrl = new ProjectCtrl();

        const data = projectCtrl.addProject(projectName, projectDescription);

        data.then(res => {

            onClose(res);

            loadProjects();

        });

    };

    // Gestionnaire d'événement pour empêcher la propagation du clic sur les champs d'entrée
    const preventClickPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-70 z-2 fixed" onClick={onClose}>
            <h1 className="text-3xl text-pink-400 font-bold mb-8">Création d'un projet</h1>   
            <form className="max-w-md mx-auto p-5 rounded-lg bg-black bg-opacity-80" style={{
                border: '1.8px dashed #f472b6',
                borderRadius: '10px',
                color: '#f472b6'
            }} onSubmit={handleSubmit} onClick={preventClickPropagation}>
                <div className="mb-4 block">
                    <label htmlFor="projectName" className="text-pink-400 font-semibold">Nom du projet</label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                        placeholder="Ex: Xenova"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="projectDescription" className="text-pink-400 font-semibold">Description du projet</label>
                    <input
                        type="text"
                        id="projectDescription"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        required
                        placeholder="Description"
                    />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mt-6">
                    <button type="submit" className="w-full bg-black text-white py-2 px-4 btn">
                        Créer le projet
                    </button>
                </div>
            </form>
        </div>
    )

}

export default ProjectForms;