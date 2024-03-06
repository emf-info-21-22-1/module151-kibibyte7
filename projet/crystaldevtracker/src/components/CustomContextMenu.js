// CustomContextMenu.tsx

import { ContextMenu, MenuItem } from 'react-contextmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClose } from '@fortawesome/free-solid-svg-icons';
import TaskCtrl from '../app/ctrl/TaskCtrl';
import StorageItems from '../app/constantes/StorageItems';

const CustomContextMenu = ({ id, trigger, loadProjectNTasks }) => {
  const taskCtrl = new TaskCtrl();

  const handleItemClick = (e, data) => {
    switch (data.label) {
      case "Modifier la tâche":
        
        break;
      case "Supprimer la tâche":
        taskCtrl.deleteTask(window.sessionStorage.getItem(StorageItems.current_task)).then(() => {
          loadProjectNTasks();
        });
        break;
    }

  };

  return (
      <ContextMenu id={id} trigger={trigger} className='bg-black text-white' style={{
      borderRadius: '10px',
      border: '1.75px solid #ff91e4',
      boxShadow: '0px 0px 5px #ff91e477'
    }}>
      <h1 className="text-pink-400 text-lg font-semibold p-3">
        Edition d'une tâche
      </h1>
      <hr style={{ border: '1px solid #f472b6' }} />
      <MenuItem onClick={handleItemClick} data={{ label: 'Modifier la tâche' }} className='p-2 cursor-pointer hover:text-pink-400'>
        <FontAwesomeIcon icon={faEdit} style={{ marginRight: '8px' }} />
        Modifier la tâche
      </MenuItem>
      <hr style={{ border: '1px dashed #f472b6' }} />
      <MenuItem onClick={handleItemClick} data={{ label: 'Supprimer la tâche' }} className='p-2 cursor-pointer hover:text-pink-400'>
        <FontAwesomeIcon icon={faClose} style={{ marginRight: '8px' }} />
        Supprimer la tâche
      </MenuItem>
    </ContextMenu>
    
  );
};

export default CustomContextMenu;
