import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import TaskCtrl from '../app/ctrl/TaskCtrl';
import StorageItems from '../app/constantes/StorageItems';

const AddTaskCard = ({ submit }) => {

    const taskCtrl = new TaskCtrl();
    const [taskName, setTaskName] = useState(null);
    const [taskDescription, setTaskDescription] = useState(null);
    const [error, setError] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const options = [
        { value: "À faire", label: "À faire" },
        { value: "En cours", label: "En cours" },
        { value: "Terminé", label: "Terminé" },
        { value: "Problème", label: "Problème" },
        { value: "Solution", label: "Solution" }
    ];

    const [etat, setEtat] = useState(options[0].value);

    //Au moment où on clique sur la carte d'ajout de tâche
    const onClick = () => {
        setIsFormVisible(!isFormVisible);
    }

    // Gestionnaire d'événement pour empêcher la propagation du clic sur les champs d'entrée
    const preventClickPropagation = (e) => {
        e.stopPropagation();
    };

    const addTask = (e) => {

        //Ajouter une tâche
        e.preventDefault();

        let pk_projet = window.sessionStorage.getItem(StorageItems.pk_projet);

        taskCtrl.addTask(taskName, taskDescription, etat, 0, pk_projet).then(res => {
            if(res.code == 200){
                submit();
            }
        });

    }

    //Le html de l'ajout des tâches
    return (
        <div style={{
            backgroundColor: 'black',
            border: '1.8px dashed #f472b6',
            borderRadius: '10px',
            cursor: 'pointer',
            marginBottom: 'auto'
        }} onClick={onClick}>


            <h1 className="font-bold p-2 no-select text-pink-400">

                <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '8px' }} />

                Ajouter une tâche

            </h1>

            {isFormVisible && (
                <>
                    <hr style={{ border: '1px solid #f472b6' }} />
                    <form id="taskForm" className="p-2" style={{ cursor: 'context-menu' }} onSubmit={(e) => addTask(e)} onClick={preventClickPropagation}>

                        <div className="mb-4">
                            <label className="text-pink-400">Nom de la tâche</label>
                            <input
                                type="name"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:ring-opacity-50"
                                placeholder="Nom de la tâche"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-pink-400">Description de la tâche</label>
                            <input
                                type="description"
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className="mt-1 p-2 w-full text-black bg-gray-200 rounded-md shadow-sm focus:ring-opacity-50"
                                placeholder="Description de la tâche"
                                required />
                        </div>
                        <div className="mb-4">
                            <label className="text-pink-400">Etat</label>
                            <select className="ml-2 text-black hover:text-pink-400" value={etat} onChange={(e) => setEtat(e.target.value)}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        <button type="submit" className="w-full font-semibold btn">Ajouter la tâche</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default AddTaskCard;