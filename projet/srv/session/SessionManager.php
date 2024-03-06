<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Les méthodes HTTP autorisées
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Credentials: true');

include_once 'constantes/constantes.php';
include_once 'tools/common.php';
include_once 'wrk/UserWrk.php';


class SessionManager
{
    private static $instance;

    private function __construct()
    {
        session_start();
    }

    public function login($username, $password)
    {

        $wrk = new UserWrk();

        $res = "";

        if (isset($username, $password)) {

            $user = $wrk->getUserByUsername($username);

            if ($user) {

                if (password_verify($password, $user->getPassword())) {

                    session_regenerate_id(true);

                    $_SESSION["username"] = $username;
                    $_SESSION["pk_user"] = $user->getPKUser();

                    $session = [
                        "pk_user" => $user->getPKUser(),
                        "username" => $user->getUsername()
                    ];

                    $res = writeJSONResponse(OK, "Connexion réussie", $session);

                } else {

                    if (isset($_SESSION)) {

                        session_unset();

                    }

                    $res = writeJSONResponse(UNAUTHORIZED, "Le mot de passe est incorrect, veuillez réessayer", array());

                }
            } else {

                $res = writeJSONResponse(UNAUTHORIZED, "Ce nom d'utilisateur n'existe pas dans la base de données", array());

            }
        }

        return $res;
    }

    public function logout()
    {

        if (session_status() === PHP_SESSION_ACTIVE) {

            session_unset();

            session_destroy();

        }

        return writeJSONResponse(OK, "Déconnexion réussie", array());

    }

    public function checkClientLogin()
    {

        $res = "";

        if (isset($_SESSION["pk_user"])) {

            $loginInfo = [
                "pk_user" => $_SESSION["pk_user"],
            ];

            $res = writeJSONResponse(OK, "Utilisateur logué: " . $_SESSION["username"], $loginInfo);

        } else {

            $res = writeJSONResponse(UNAUTHORIZED, "Utilisateur non logué", array());

        }

        return $res;
    }

    public function checkServerLogin()
    {
        $res = "";

        if(isset($_SESSION["pk_user"])){
            $loginInfo = [
                "pk_user" => $_SESSION["pk_user"],
            ];

            $res = $loginInfo;
        }

        return is_null($res) ? false : true;

    }

    public static function getInstance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}

?>