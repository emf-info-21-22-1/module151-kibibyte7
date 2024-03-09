<?php

include_once 'session/SessionManager.php';
include_once 'tools/common.php';
include_once 'wrk/ProjectWrk.php';
include_once 'wrk/TaskWrk.php';

class ProjectCtrl
{

    public function addProject($nom, $description, $fk_user)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new ProjectWrk();

            $success = $wrk->addProject($nom, $description, $fk_user);

            if ($success) {

                $res = writeJSONResponse(OK, "Projet ajouté: " . $nom, array());

            } else {

                $res = writeJSONResponse(INTERNAL_SERVER_ERROR, "Un problème est survenu lors de la création du projet", array());

            }

        } else {

            $res = writeJSONResponse(FORBIDDEN, "Utilisateur non logué", array());

        }

        return $res;

    }

    public function loadProjects($fk_user)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new ProjectWrk();

            $liste = $wrk->loadProjects($fk_user);

            $res = writeJSONResponse(OK, "Liste des projets retournés", $liste);
        } else {

            $res = writeJSONResponse(FORBIDDEN, "Utilisateur non logué", array());

        }

        return $res;
    }

    public function loadProjectNTasks($pk_projet, $fk_user)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $projectWrk = new ProjectWrk();

            $taskWrk = new TaskWrk();

            $project = $projectWrk->getProject($pk_projet, $fk_user);

            if ($project) {

                $tasks = $taskWrk->loadTasks($pk_projet);

                $json = [
                    "name" => $project->getNom(),
                    "description" => $project->getDescription(),
                    "dateCreation" => $project->getDateCreation(),
                    "pk_projet" => $project->getPKProjet(),
                    "fk_user" => $project->getFkUser(),
                    "tasks" => $tasks
                ];

                $res = writeJSONResponse(OK, "Projet avec liste des tâches retourné", $json);

            } else {

                $res = writeJSONResponse(NOT_FOUND, "Le projet spécifié n'est pas trouvé dans la base de données", array());

            }

        } else {

            $res = writeJSONResponse(FORBIDDEN, "Utilisateur non logué", array());

        }

        return $res;

    }

}

?>