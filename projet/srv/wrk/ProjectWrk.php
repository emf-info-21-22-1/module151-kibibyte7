<?php
include_once 'connexion/Connexion.php';
include_once 'beans/Project.php';

class ProjectWrk {

    public function addProject($name, $description, $fk_user) {
        
        $params = array("name" => $name, "description" => $description, "fk_user" => $fk_user);

        $affectedLines = Connexion::getInstance()->executeQuery("INSERT INTO t_projet(nom, description, fk_user) VALUES (:name, :description, :fk_user);", $params);

        return $affectedLines == 1;

    }

    public function loadProjects($fk_user) {

        $res = [];
        $i = 0;
        $params = array("fk_user"=> $fk_user);

        $rows = Connexion::getInstance()->SelectQuery("SELECT * FROM t_projet WHERE fk_user = :fk_user", $params);

        foreach ($rows as $row) {

            $project = new Project();

            $project->initFromDb($row);

            $res[$i] = [
                "name"=> $project->getNom(),
                "description" => $project->getDescription(),
                "dateCreation"=> $project->getDateCreation(),
                "pk_projet"=> $project->getPKProjet(),
                "fk_user"=> $project->getFkUser()
            ];

            $i++;
        }

        return $res;
    }

    public function getProject($pk_projet, $fk_user){

        $params = array("pk_projet" => $pk_projet, "fk_user" => $fk_user);

        $row = Connexion::getInstance()->SelectSingleQuery("SELECT * FROM t_projet WHERE pk_projet=:pk_projet AND fk_user=:fk_user", $params);

        $res = '';

        if ($row){

            $project = new Project();

            $project->initFromDb($row);

            $res = $project;

        }

        return $res;

    }
}

?>