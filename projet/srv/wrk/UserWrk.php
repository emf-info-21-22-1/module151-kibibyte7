<?php

include_once 'connexion/Connexion.php';
include_once 'beans/User.php';

class UserWrk {

    public function addUser($username, $password){

        $usernameNeedsEscapes = preg_match('/<[^>]+>/', $username);

        if($usernameNeedsEscapes <> 0){

            $username = strip_tags($username);
        
        } 

        $row = $this->getUserByUserName($username);

        // Au moins 8 caractères, au moins une majuscule, et au moins un chiffre ou caractère spécial
        $isPasswordComplex = preg_match('/^(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:\'",<>\.\?\/`~])(.{8,})$/', $password) <> 0;

        $res = "";

        if (!$row) {

            if ($isPasswordComplex) {

                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                $params = array('username' => $username, 'password' => $hashedPassword);

                $affectedLines = Connexion::getInstance()->executeQuery("INSERT INTO t_user(username, password) VALUES (:username, :password);", $params);

                $addedUser = $this->getUserByUsername($username);

                $res = [
                    "pk_user" => $addedUser->getPKUser(),
                    "username" => $addedUser->getUsername()
                ];

        } else {

            $res = -1;

        }

        } else {

            $res = -2;

        }

        return $res;
    }

    public function getUser($pk_user){

        $params = array("pk_user" => $pk_user);

        $row = Connexion::getInstance()->SelectSingleQuery("SELECT * FROM t_user WHERE pk_user = :pk_user", $params);

        if (!$row) {

            $res = false;

            return $res;

        } else {

            $user = new User();

            $user->initFromDb($row);

            return $user;

        }

    }

    public function getUserByUsername($username){

        $params = array("username" => $username);

        $row = Connexion::getInstance()->SelectSingleQuery("SELECT * FROM t_user WHERE username = :username", $params);

        if (!$row) {

            $res = false;

            return $res;

        } else {

            $user = new User();

            $user->initFromDb($row);

            return $user;

        }

    }
}
?>