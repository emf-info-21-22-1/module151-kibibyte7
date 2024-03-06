<?php

include_once 'wrk/UserWrk.php';
include_once 'constantes/constantes.php';
include_once 'tools/common.php';

class UserCtrl
{

    public function addUser($username, $password){

        $wrk = new UserWrk();

        $user = $wrk->addUser($username, $password);

        switch ($user) {
            case -1:
                $res = writeJSONResponse(UNAUTHORIZED, "Le mot de passe doit comporter au moins 8 caractères, au moins une majuscule, et au moins un chiffre ou caractère spécial", array());
                break;
            case -2:
                $res = writeJSONResponse(UNAUTHORIZED, "Ce nom d'utilisateur n'est pas disponible, veuillez en choisir un autre", array());
                break;
            default:
                $res = writeJSONResponse(OK, "L'utilisateur a été ajouté avec succès", $user);   
        }

        return $res;
    }

    public function getUser($pk_user){

        $wrk = new UserWrk();

        $user = $wrk->getUser($pk_user);

        $res = "";

        if(!$user){

            $res = writeJSONResponse(NOT_FOUND, "Cet utilisateur n'existe pas dans la base de donnée", array());

        } else {

            $res = writeJSONResponse(OK, "Utilisateur retourné avec succès", array(
                "pk_user" => $user->getPKUser(), 
                "username" => $user->getUsername(),
            ));

        }

        return $res;
    }

    public function getUserByUsername($username){

        $wrk = new UserWrk();

        $user = $wrk->getUser($username);

        $res = "";

        if(!$user){

            $res = writeJSONResponse(NOT_FOUND, "Cet utilisateur n'existe pas dans la base de donnée", array());

        } else {

            $res = writeJSONResponse(OK, "Utilisateur retourné avec succès", array(
                "pk_user" => $user->getPKUser(), 
                "username" => $user->getUsername(),
            ));

        }

        return $res;
    }
}

?>