<?php

include_once 'connexion/Connexion.php';
include_once 'beans/User.php';

/**
 * Classe UserWrk pour la manipulation des utilisateurs.
 *
 * @package wrk
 */
class UserWrk
{

    /**
     * Ajoute un nouvel utilisateur.
     *
     * @param string $username Le nom d'utilisateur.
     * @param string $password Le mot de passe de l'utilisateur.
     * @return mixed Retourne un tableau contenant les informations de l'utilisateur ajouté (en cas de succès),
     *               -1 si le mot de passe ne satisfait pas les critères de complexité,
     *               -2 si le nom d'utilisateur existe déjà, ou
     *               en cas d'erreur lors de l'interaction avec la base de données.
     */
    public function addUser($username, $password)
    {

        $usernameNeedsEscapes = preg_match('/<[^>]+>/', $username);

        if ($usernameNeedsEscapes <> 0)
            $username = strip_tags($username);

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

    /**
     * Récupère les informations d'un utilisateur à partir de son identifiant unique.
     *
     * @param int $pk_user L'identifiant unique de l'utilisateur.
     * @return User|false Retourne un objet User si l'utilisateur est trouvé, sinon false.
     */
    public function getUser($pk_user)
    {

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

    /**
     * Récupère les informations d'un utilisateur à partir de son nom d'utilisateur.
     *
     * @param string $username Le nom d'utilisateur de l'utilisateur.
     * @return User|false Retourne un objet User si l'utilisateur est trouvé, sinon false.
     */
    public function getUserByUsername($username)
    {

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