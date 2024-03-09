<?php

include_once "ctrl/UserCtrl.php";
include_once 'tools/common.php';

$methode = $_SERVER['REQUEST_METHOD'];

$ctrl = new UserCtrl();

switch ($methode) {
    case 'GET':
        if (isset($_GET['username'])) {
            echo $ctrl->getUserByUsername($_GET['username']);
        }
        if (isset($_GET['pk_user'])) {
            echo $ctrl->getUserByUsername($_GET['pk_user']);
        }
        break;
    case 'POST':
        $username = initVariableFromJson("username");
        $password = initVariableFromJson("password");

        if (isset($username) && isset($password)) {

            echo $ctrl->addUser($username, $password);

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