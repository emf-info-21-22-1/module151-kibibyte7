import axios from "axios";
import StorageItems from "../app/constantes/StorageItems";

const baseUrl = "https://abrahaml.emf-informatique.ch/151/srv/"
//const baseUrl = "http://localhost/srv/"

const httpServices = {

    //--------------------- SESSION --------------------------//

    async login(username, password) {

        try {

            const res = await axios.post(baseUrl + 'session.php', {
                "action": "login",
                "username": username,
                "password": password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

            return res.data;

        } catch (error) {

            return error.response.data;

        }
    },

    async logout() {

        try {

            const res = await axios.post(baseUrl + 'session.php', {
                "action": "logout"
            },
            {
                headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

            return res.data;

        } catch (error) {

            return error.response.data;

        }
    },

    async checkLogin() {

        try {

            const res = await axios.get(baseUrl + 'session.php?action=checkLogin', { withCredentials: true });

            return res.data;

        } catch (error) {

            return error.response.data;

        }
    },

    //--------------------- PROJET --------------------------//

    async addProject(name, description) {

        try {

            const res = await axios.post(baseUrl + 'projectservices.php', {
                "name": name,
                "description": description,
                "fk_user": window.sessionStorage.getItem(StorageItems.pk_user)
            },{
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return res.data;

        } catch (error) {

            return error.response.data;

        }
    },

    async loadProjects() {

        try {

            const res = await axios.get(baseUrl + `projectservices.php`,{
                params:{
                    fk_user:window.sessionStorage.getItem(StorageItems.pk_user)
                }
            });

            return res.data;

        } catch (error) {

            return error.response.data;

        }
    },

    //--------------------- TASKS --------------------------//

    async loadProjectNtasks(pk_projet, fk_user) {

        try {

            const res = await axios.get(baseUrl + `projectservices.php`,{
                params:{
                    pk_projet:pk_projet,
                    fk_user:fk_user
                }
            });
            
            return res.data;

        } catch (error) {

            return error.response.data;

        }

    },

    async updateTask(pk_tache, nom, description, etat, temps, fk_projet) {

        try {

            const res = await axios.put(baseUrl + 'taskservices.php', {
                "action":"updateTask",
                "pk_tache":pk_tache,
                "nom": nom,
                "description": description,
                "fk_projet": fk_projet,
                "etat":etat,
                "temps":temps
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return res.data;

        } catch (error) {

            return error.response.data;

        }

    },

    async updateEtatTask(pk_tache, etat) {

        try {

            const res = await axios.put(baseUrl + 'taskservices.php', {
                "action":"updateEtatTask",
                "pk_tache":pk_tache,
                "etat":etat
            },{
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return res.data;

        } catch (error) {

            return error.response.data;

        }

    },

    async addTask(titre, description, etat, temps = 0, fk_projet) {

        try {

            const res = await axios.post(baseUrl + 'taskservices.php', {
                "titre": titre,
                "description": description,
                "fk_projet": fk_projet,
                "etat":etat,
                "temps":temps,
                "dateCreation": new Date()
            },{
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return res.data;

        } catch (error) {

            return error.response.data;

        }
    },

    async deleteTask(pk_tache) {

        try {

            const res = await axios.delete(baseUrl + 'taskservices.php', {
                params:{
                    pk_tache: pk_tache
                }
            })

            return res.data;

        } catch (error) {

            return error.response.data;

        }

    },

    //--------------------- USERS --------------------------//

    async addUser(username, password) {

        try {

            const res = await axios.post(baseUrl + 'userservices.php', {
                "username": username,
                "password": password
            },{
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return res.data;

        } catch (error) {

            return error.response.data;

        }

    }

};

export default httpServices;