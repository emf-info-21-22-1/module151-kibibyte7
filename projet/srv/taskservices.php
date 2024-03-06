<?php

include_once 'ctrl/TaskCtrl.php';
include_once 'tools/common.php';

$methode = $_SERVER['REQUEST_METHOD'];

$ctrl = new TaskCtrl();

$res = "";

switch ($methode) {
    case 'GET':

        if (isset($_GET['fk_projet'])) {

            $fk_projet = $_GET['fk_projet'];

            echo $ctrl->loadTasks($fk_projet);

        }
        break;
    case 'POST':
        $titre = initVariableFromJson("titre");
        $description = initVariableFromJson("description");
        $etat = initVariableFromJson("etat");
        $temps = initVariableFromJson("temps");
        $fk_projet = initVariableFromJson("fk_projet");

        if (isset($titre, $description, $etat, $temps, $fk_projet)) {

            echo $ctrl->addTask($titre, $description, $etat, $temps, $fk_projet);

        }
        break;
    case 'PUT':
        $action = initVariableFromJson("action");

        switch ($action) {
            case "updateEtatTask":
                $pk_tache = initVariableFromJson("pk_tache");
                $etat = initVariableFromJson("etat");

                echo $ctrl->updateEtatTask($pk_tache, $etat);
                break;
            case "updateTask":
                $pk_tache = initVariableFromJson("pk_tache");
                $titre = initVariableFromJson("titre");
                $description = initVariableFromJson("description");
                $etat = initVariableFromJson("etat");
                $temps = initVariableFromJson("temps");
                $fk_projet = initVariableFromJson("fk_projet");

                echo $ctrl->updateTask($pk_tache, $titre, $description, $etat, $temps, $fk_projet);
                break;

        }
        break;
    case 'DELETE':
        
        $pk_tache = $_REQUEST["pk_tache"];

        if (isset($pk_tache)) {

            echo $ctrl->deleteTask($pk_tache);

        }
        break;
        case 'OPTIONS':
            //En test
            //header('Access-Control-Allow-Origin: http://localhost:3000');
            
            //En "prod"
            header('Access-Control-Allow-Origin: https://abrahaml.emf-informatique.ch/151/client');
            
            header('Access-Control-Allow-Credentials: true');
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Les méthodes HTTP autorisées
            header("Access-Control-Allow-Headers: Content-Type"); // Les en-têtes autorisés (Content-Type est généralement nécessaire pour POST)
            exit();
}
?>
