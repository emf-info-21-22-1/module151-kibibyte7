<?php
include_once 'ctrl/ProjectCtrl.php';

$methode = $_SERVER['REQUEST_METHOD'];

$ctrl = new ProjectCtrl();

switch ($methode) {
    case 'GET':

        $res;

        if (isset($_GET['fk_user'])) {

            if (isset($_GET['pk_projet'])) {

                $fk_user = $_GET['fk_user'];
                $pk_projet = $_GET['pk_projet'];

                $res = $ctrl->loadProjectNTasks($pk_projet, $fk_user);

            } else {

                $fk_user = $_GET['fk_user'];

                $res = $ctrl->loadProjects($fk_user);

            }

        }



        echo $res;

        break;

    case 'POST':

        $res = "";

        $name = initVariableFromJson("name");
        $description = initVariableFromJson("description");
        $fk_user = initVariableFromJson("fk_user");

        if (isset($name, $description, $fk_user)) {

            $res = $ctrl->addProject($name, $description, $fk_user);

        }

        echo $res;
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
