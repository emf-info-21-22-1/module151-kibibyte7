import httpServices from "../../services/httpServices";

class ProjectCtrl {

    addProject(name: string, description:string){
        return httpServices.addProject(name, description);
    }

    loadProjects(){
        return httpServices.loadProjects();
    }
}

export default ProjectCtrl;