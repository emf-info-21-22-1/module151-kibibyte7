<?php
include_once 'constantes/constantes.php';
include_once 'tools/common.php';
include_once 'wrk/UserWrk.php';
include_once 'session/SessionManager.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Les méthodes HTTP autorisées
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$action = initVariableFromJson("action");
	if (isset($action)) {
		switch ($action) {
			case 'login':
				$username = initVariableFromJson("username");
				$password = initVariableFromJson("password");

				echo SessionManager::getInstance()->login($username, $password);

				break;
				case 'logout':
					echo SessionManager::getInstance()->logout();
				break;
		}

	}
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

	$action = $_GET['action'];

	if (isset($action)) {

		switch ($action) {

			case 'checkLogin':
				$res = SessionManager::getInstance()->checkClientLogin();

				echo $res;
			}
	}
}

?>