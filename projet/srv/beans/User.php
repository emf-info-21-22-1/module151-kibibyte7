<?php
class User {
    private $pk_user;
    private $username;
    private $password;

    public function initFromDb($data){
        $this->pk_user = $data["pk_user"];
        $this->username = $data["username"];
        $this->password = $data["password"];
    }

    public function getPKUser(){
        return $this->pk_user;
    }

    public function getUsername(){
        return $this->username;
    }

    public function getPassword(){
        return $this->password;
    }
}

?>