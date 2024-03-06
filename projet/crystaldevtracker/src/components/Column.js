// Column.js
import {useState} from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';
import AddTaskCard from './AddTaskCard';

const Column = ({ name, tasks, moveCard, submit, loadProjectNTasks }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => {
      console.log(item);
      moveCard(item.pk_tache, name)
    },
  });

  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = () => {
    setIsOver(false);
  };

  return (
    <div ref={drop} style={{ flex: '1', marginLeft: '1%', marginRight: '1%', minHeight: '10%'}} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
    <h2 className="font-semibold text-2xl text-pink-400 mb-3 bg-black pt-1">{name}</h2>
    <div className="flex flex-col overflow-y-scroll scrollbar-hidden p-1 pb-6" style={{ maxHeight: '80vh', borderRadius: '10px', border: isOver ? '2px solid #f472b6' : '2px solid transparent' }}>
      {tasks.map((task) => (
        <Card key={task.pk_tache} pk_tache={task.pk_tache} titre={task.titre} description={task.description} temps={task.temps == 0 ? "Pas encore défini" : temps} dateCreation={task.dateCreation} etat={task.etat} loadProjectNtasks={loadProjectNTasks}/>
      ))} 
      <AddTaskCard submit={submit}/>
    </div>
  </div>
  
  );
};

export default Column;