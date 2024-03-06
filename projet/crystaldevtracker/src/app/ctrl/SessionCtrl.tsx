import httpServices from '../../services/httpServices';

class SessionCtrl {

    login(username:string, password:string){

        const res = httpServices.login(username, password);

        return res;

    }

    logout(){

        const res = httpServices.logout();

        return res;
        
    }

    checkLogin(){

        const res = httpServices.checkLogin();

        return res;
    }

}

export default SessionCtrl;