<?php
include_once 'beans/Task.php';

class TaskWrk {

    public function addTask($titre, $description, $etat, $temps, $fk_projet){

        $params = array("titre" => $titre, "description" => $description, "etat" => $etat, "temps" => $temps, "fk_projet" => $fk_projet);

        $affectedLines = Connexion::getInstance()->executeQuery("INSERT INTO t_tache(titre, description, etat, temps, fk_projet) VALUES (:titre, :description, :etat, :temps, :fk_projet)", $params);

        return $affectedLines == 1;
    }

    public function loadTasks($fk_projet){

        $params = array("fk_projet" => $fk_projet);

        $rows = Connexion::getInstance()->SelectQuery("SELECT * FROM t_tache WHERE fk_projet=:fk_projet", $params);

        $i = 0;

        $res = [];

        foreach($rows as $row){
            $task = new Task();

            $task->initFromDb($row);

            $res[$i] = [
                "pk_tache" => $task->getPKTache(),
                "titre" => $task->getTitre(),
                "description" => $task->getDescription(),
                "dateCreation" => $this->formatDateCreation($task->getDateCreation()),
                "etat" => $task->getEtat(),
                "temps" => $task->getTemps()
            ];

            $i++;
            
        }

        return $res;
    }

    public function updateTask($pk_tache, $titre, $description, $etat, $temps, $fk_projet){

        $params = array("pk_tache" => $pk_tache, "titre" => $titre, "description" => $description, "etat" => $etat, "temps" => $temps, "fk_projet" => $fk_projet);

        $affectedLines = Connexion::getInstance()->executeQuery("UPDATE t_tache SET titre=:titre, description=:description, etat=:etat temps=:temps WHERE pk_tache=:pk_tache AND fk_projet=:fk_projet", $params);

        return $affectedLines == 1;
    }

    public function updateEtatTask($pk_tache, $etat){

        $params = array("pk_tache" => $pk_tache, "etat" => $etat);

        $affectedLines = Connexion::getInstance()->executeQuery("UPDATE t_tache SET etat=:etat WHERE pk_tache=:pk_tache", $params);

        return $affectedLines == 1;

    }

    public function deleteTask($pk_tache){

        $params = array("pk_tache" => $pk_tache);

        $affectedLines = Connexion::getInstance()->executeQuery("DELETE FROM t_tache WHERE pk_tache=:pk_tache", $params);

        return $affectedLines == 1;

    }

    public function formatDateCreation($date){

        $dateTime = new DateTime($date);

        return $dateTime->format("d-m-Y H:i:s");
        
    }

}

?>