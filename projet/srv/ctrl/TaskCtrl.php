<?php
include_once 'wrk/TaskWrk.php';
include_once 'tools/common.php';
include_once 'session/SessionManager.php';

class TaskCtrl
{

    function addTask($titre, $description, $etat, $temps, $fk_projet)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new TaskWrk();

            $success = $wrk->addTask($titre, $description, $etat, $temps, $fk_projet);

            if ($success) {

                $res = writeJSONResponse(OK, "Tâche ajouté: " . $titre, array());

            } else {

                $res = writeJSONResponse(INTERNAL_SERVER_ERROR, "Un problème est survenu lors de la création de la tâche", array());

            }

        } else {

            $res = writeJSONResponse(FORBIDEN, "Utilisateur non logué", array());

        }

        return $res;

    }

    public function updateEtatTask($pk_tache, $etat){

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new TaskWrk();

            $success = $wrk->updateEtatTask($pk_tache, $etat);

            if($success){

                $res = writeJSONResponse(OK, "Mise à jour de l'état de la tâche réussie", array());

            } else {

                $res = writeJSONResponse(INTERNAL_SERVER_ERROR, "Un problème est survenu lors de la mise à jour de la tâche", array());

            }

        } else {

            $res = writeJSONResponse(FORBIDEN, "Utilisateur non logué", array());

        }

        return $res;
    }

    function updateTask($pk_tache, $titre, $description, $etat, $temps, $fk_projet)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new TaskWrk();

            $success = $wrk->updateTask($pk_tache, $titre, $description, $etat, $temps, $fk_projet);

            if ($success) {

                $res = writeJSONResponse(OK, "Tâche ajouté: " . $titre, array());

            } else {

                $res = writeJSONResponse(INTERNAL_SERVER_ERROR, "Un problème est survenu lors de la création de la tâche", array());

            }


        } else {

            $res = writeJSONResponse(FORBIDEN, "Utilisateur non logué", array());

        }

        return $res;
    }

    function deleteTask($pk_tache)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new TaskWrk();

            $success = $wrk->deleteTask($pk_tache);

            if ($success) {

                $res = writeJSONResponse(OK, "Tâche supprimée: " . $pk_tache, array());

            } else {

                $res = writeJSONResponse(INTERNAL_SERVER_ERROR, "Un problème est survenu lors de la supression de la tâche", array());

            }


        } else {

            $res = writeJSONResponse(FORBIDEN, "Utilisateur non logué", array());

        }

        return $res;
    }

    function loadTasks($fk_projet)
    {

        $res = '';

        $isLogged = SessionManager::getInstance()->checkServerLogin();

        if ($isLogged) {

            $wrk = new TaskWrk();

            $liste = $wrk->loadTasks($fk_projet);

            $res = writeJSONResponse(OK, "Tâches retournées", $liste);

        } else {

            $res = writeJSONResponse(FORBIDEN, "Utilisateur non logué", array());

        }

        return $res;
    }

}

?>