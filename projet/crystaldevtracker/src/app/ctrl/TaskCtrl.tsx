import httpServices from '../../services/httpServices';

class TaskCtrl {

    addTask(titre: string, description: string, etat:string, temps:number, fk_projet:number){
        return httpServices.addTask(titre, description, etat, temps, fk_projet);
    }

    deleteTask(pk_tache:number){
        return httpServices.deleteTask(pk_tache);
    }

    updateEtatTask(pk_tache:number, etat:string){
        return httpServices.updateEtatTask(pk_tache, etat);
    }

    loadProjectNTasks(selectedProject:number, fk_user:number){
        return httpServices.loadProjectNtasks(selectedProject, fk_user);
    }

}

export default TaskCtrl;