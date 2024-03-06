// Card.js
import React from 'react';
import { useDrag } from 'react-dnd';
import CustomContextMenu from './CustomContextMenu';
import { ContextMenuTrigger } from 'react-contextmenu';
import StorageItems from '../app/constantes/StorageItems';

const Card = ({ pk_tache, titre, description, dateCreation, temps, etat, loadProjectNtasks }) => {
    const [, drag] = useDrag({
        type: 'CARD',
        item: { pk_tache, titre, description, temps, dateCreation, temps , etat},
    });

    const setCurrentTaskInStorage = (e) => {
        e.preventDefault();
        window.sessionStorage.setItem(StorageItems.current_task, pk_tache);
    }

    const deleteTaskInStorage = (e) => {
        window.sessionStorage.setItem(StorageItems.current_task, undefined);
    }

    deleteTaskInStorage

    return (
        <div ref={drag} style={{ padding: '8px', backgroundColor: '#ffffff', color: 'black', borderRadius: '10px', marginBottom: '8px' }}>
            <ContextMenuTrigger id='tache' className="z-6" mouseButton={2} holdToDisplay={900000}>
                <div onMouseEnter={(e) => setCurrentTaskInStorage(e)}>
                <h2 className="mb-2 font-semibold">{titre}</h2>
                <hr></hr>
                <p className="mb-2">{description}</p>
                <p className='mt-1'>Temps passé dessus: {temps}</p>
                <hr />
                <p className="text-gray-500 text-xs mt-1">Créé le: {dateCreation}</p>
                </div>      
                <CustomContextMenu id="tache" loadProjectNTasks={loadProjectNtasks}/>
            </ContextMenuTrigger>
            
        </div>
    );
};

export default Card;
