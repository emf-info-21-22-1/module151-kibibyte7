<?php

/**
 * Classe User représentant un utilisateur.
 */
class User
{
    private $pk_user;
    private $username;
    private $password;

    /**
     * Initialise les propriétés de l'objet à partir des données de la base de données.
     *
     * @param array $data Tableau associatif contenant les données de l'utilisateur.
     *                    Doit contenir les clés "pk_user", "username", et "password".
     * @return void
     */
    public function initFromDb($data)
    {
        $this->pk_user = $data["pk_user"];
        $this->username = $data["username"];
        $this->password = $data["password"];
    }

    /**
     * Obtient l'identifiant unique de l'utilisateur.
     *
     * @return int L'identifiant unique de l'utilisateur.
     */
    public function getPKUser()
    {
        return $this->pk_user;
    }


    /**
     * Obtient le nom d'utilisateur.
     *
     * @return string Le nom d'utilisateur.
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Obtient le mot de passe de l'utilisateur.
     *
     * @return string Le mot de passe hâché de l'utilisateur.
     */
    public function getPassword()
    {
        return $this->password;
    }
}

?>