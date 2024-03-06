import React, { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import '../app/globals.css';
import UserNavBar from '../components/UserNavBar';
import Column from '../components/Column';
import SessionCtrl from '../app/ctrl/SessionCtrl';
import ProjectForms from '../components/ProjectForms';
import TaskCtrl from '../app/ctrl/TaskCtrl';
import StorageItems from '../app/constantes/StorageItems';
import ProjectCtrl from '../app/ctrl/ProjectCtrl';
import Link from 'next/link';

const Dashboard = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");
    const [projects, setProjects] = useState([]);

    const sessionCtrl = new SessionCtrl();
    const taskCtrl = new TaskCtrl();
    const projectCtrl = new ProjectCtrl();
    const columns = ['À faire', 'En cours', 'Terminé', 'Problème', 'Solution'];

    useEffect(() => {

        checkLogin();

    }, []);

    useEffect(() => loadProjects(), []);

    const loadProjects = () => {

        // Appel à la fonction de chargement des projets
        const data = projectCtrl.loadProjects();

        // Charger les projets dans le Select (le body est un array de projets quand il est reçu)
        data.then((res) => {
            setProjects(res.body);

            let isFirstProject = res.body.length == 1;
            
            if(isFirstProject) window.sessionStorage.setItem(StorageItems.pk_projet, res.body[0].pk_projet);
             
            let pk_projet = window.sessionStorage.getItem(StorageItems.pk_projet);

            console.log("pk_projet from sessionStorage:", pk_projet);

            for (let i = 0; i < res.body.length; i++) {
                if (pk_projet == res.body[i].pk_projet) {
                    let projet = res.body[i];
                    console.log("Selected Project:", projet);
                    setSelectedProject(projet.pk_projet);
                    break;
                } else {
                    
                }
            }

            loadTasks();
        });
    };


    const checkLogin = () => {

        const data = sessionCtrl.checkLogin();

        data.then(res => {

            if (res.code !== 200) {

                window.sessionStorage.clear();
                window.location.href = "/151/client";

            }

        })
    }

    const loadTasks = () => {

        let fk_user_string = window.sessionStorage.getItem(StorageItems.pk_user);
        let pk_projet_string = window.sessionStorage.getItem(StorageItems.pk_projet);

        if (fk_user_string !== null && pk_projet_string !== null) {

            let fk_user = parseInt(fk_user_string);
            let pk_projet = parseInt(pk_projet_string);

            const data = taskCtrl.loadProjectNTasks(pk_projet, fk_user);

            data.then((res) => {

                setTasks(res.body.tasks);

            });
        }
    }

    const moveCard = (taskId: number, targetStatus: string) => {
        if (tasks !== null) {
            const updatedTasks = tasks.map((task) =>
                task.pk_tache === taskId ? { ...task, etat: targetStatus } : task
            );
            taskCtrl.updateEtatTask(taskId, targetStatus);
            setTasks(updatedTasks);
        }
    };

    const disableDefaultContextMenu = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    const onProjectSelected = () => {

        let pk_projet = window.sessionStorage.getItem(StorageItems.pk_projet);

        if (pk_projet !== null) {

            setSelectedProject(pk_projet);

            loadTasks();

        }
    }

    return (
        <>
            {(isFormVisible && <ProjectForms loadProjects={loadProjects} onClose={() => { toggleFormVisibility() }} />)}
            <div className="h-screen w-screen bg-black overflow-y-hidden z-3" onContextMenu={disableDefaultContextMenu}>
                <UserNavBar onOpen={toggleFormVisibility} projects={projects} onProjectSelect={onProjectSelected} selected={selectedProject} />
                <DndProvider backend={HTML5Backend}>
                    <div style={{ display: 'flex' }} className='mb-1 mr-1 ml-1'>
                        {columns.map((column) => (
                            <Column
                                key={column}
                                name={column}
                                tasks={tasks == undefined ? [] : tasks.filter((task) => task.etat === column)}
                                moveCard={moveCard}
                                submit={loadTasks}
                                loadProjectNTasks={loadTasks}
                            />
                        ))}
                    </div>
                </DndProvider>
            </div>
        </>
    );
};

export default Dashboard;
