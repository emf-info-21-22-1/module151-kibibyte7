import httpServices from '../../services/httpServices';

class RegisterCtrl {

    addUser(username:string, password:string){

        const res = httpServices.addUser(username, password);

        return res;
        
    }

}

export default RegisterCtrl;