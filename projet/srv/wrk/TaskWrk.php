<?php
include_once 'beans/Task.php';

/**
 * Classe TaskWrk pour la manipulation des tâches.
 *
 * @package wrk
 */
class TaskWrk
{

    /**
     * Ajoute une nouvelle tâche à un projet.
     *
     * @param string $titre Le titre de la tâche.
     * @param string $description La description de la tâche.
     * @param string $etat L'état de la tâche.
     * @param int|null $temps Le temps estimé pour la tâche (peut être null).
     * @param int $fk_projet L'identifiant du projet auquel la tâche est associée.
     * @return bool Retourne true si la tâche a été ajoutée avec succès, sinon false.
     */
    public function addTask($titre, $description, $etat, $temps, $fk_projet)
    {

        $titreNeedsEscapes = preg_match('/<[^>]+>/', $titre);
        $descriptionNeedsEscapes = preg_match('/<[^>]+>/', $description);
        $etatNeedsEscapes = preg_match('/<[^>]+>/', $etat);

        if ($titreNeedsEscapes <> 0)
            $titre = strip_tags($titre);
        if ($descriptionNeedsEscapes <> 0)
            $description = strip_tags($description);
        if ($etatNeedsEscapes <> 0)
            $etat = strip_tags($etat);

        $params = array("titre" => $titre, "description" => $description, "etat" => $etat, "temps" => $temps, "fk_projet" => $fk_projet);

        $affectedLines = Connexion::getInstance()->executeQuery("INSERT INTO t_tache(titre, description, etat, temps, fk_projet) VALUES (:titre, :description, :etat, :temps, :fk_projet)", $params);

        return $affectedLines == 1;
    }

    /**
     * Charge les tâches associées à un projet.
     *
     * @param int $fk_projet L'identifiant du projet pour lequel charger les tâches.
     * @return array|null Retourne un tableau contenant les données des tâches chargées ou null en cas d'erreur.
     */
    public function loadTasks($fk_projet)
    {

        $params = array("fk_projet" => $fk_projet);

        $rows = Connexion::getInstance()->SelectQuery("SELECT * FROM t_tache WHERE fk_projet=:fk_projet", $params);

        $i = 0;

        $res = [];

        foreach ($rows as $row) {
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

    public function getTask($pk_task)
    {

        $params = array("pk_task" => $pk_task);

        $row = Connexion::getInstance()->SelectSingleQuery("SELECT * FROM t_tache WHERE pk_task=:pk_task", $params);

        if ($row) {



        }

    }

    /**
     * Met à jour les informations d'une tâche existante.
     *
     * @param int $pk_tache L'identifiant unique de la tâche à mettre à jour.
     * @param string $titre Le nouveau titre de la tâche.
     * @param string $description La nouvelle description de la tâche.
     * @param string $etat Le nouvel état de la tâche.
     * @param int|null $temps Le nouveau temps estimé pour la tâche (peut être null).
     * @param int $fk_projet L'identifiant du projet auquel la tâche est associée.
     * @return bool Retourne true si la mise à jour de la tâche a réussi, sinon false.
     */
    public function updateTask($pk_tache, $titre, $description, $etat, $temps, $fk_projet)
    {

        $titreNeedsEscapes = preg_match('/<[^>]+>/', $titre);
        $descriptionNeedsEscapes = preg_match('/<[^>]+>/', $description);
        $etatNeedsEscapes = preg_match('/<[^>]+>/', $etat);

        if ($titreNeedsEscapes <> 0)
            $titre = strip_tags($titre);
        if ($descriptionNeedsEscapes <> 0)
            $description = strip_tags($description);
        if ($etatNeedsEscapes <> 0)
            $etat = strip_tags($etat);

        $params = array("pk_tache" => $pk_tache, "titre" => $titre, "description" => $description, "etat" => $etat, "temps" => $temps, "fk_projet" => $fk_projet);

        $affectedLines = Connexion::getInstance()->executeQuery("UPDATE t_tache SET titre=:titre, description=:description, etat=:etat temps=:temps WHERE pk_tache=:pk_tache AND fk_projet=:fk_projet", $params);

        return $affectedLines == 1;
    }

    /**
     * Met à jour l'état d'une tâche existante.
     *
     * @param int $pk_tache L'identifiant unique de la tâche à mettre à jour.
     * @param string $etat Le nouvel état de la tâche.
     * @return bool Retourne true si la mise à jour de l'état de la tâche a réussi, sinon false.
     */
    public function updateEtatTask($pk_tache, $etat)
    {

        $etatNeedsEscapes = preg_match('/<[^>]+>/', $etat);

        if ($etatNeedsEscapes <> 0)
            $etat = strip_tags($etat);

        $params = array("pk_tache" => $pk_tache, "etat" => $etat);

        $affectedLines = Connexion::getInstance()->executeQuery("UPDATE t_tache SET etat=:etat WHERE pk_tache=:pk_tache", $params);

        return $affectedLines == 1;

    }

    /**
     * Supprime une tâche existante.
     *
     * @param int $pk_tache L'identifiant unique de la tâche à supprimer.
     * @return bool Retourne true si la suppression de la tâche a réussi, sinon false.
     */
    public function deleteTask($pk_tache)
    {

        $params = array("pk_tache" => $pk_tache);

        $affectedLines = Connexion::getInstance()->executeQuery("DELETE FROM t_tache WHERE pk_tache=:pk_tache", $params);

        return $affectedLines == 1;

    }

    /**
     * Formate une date pour afficher la date de création.
     *
     * @param string $date La date à formater (au format compatible avec DateTime).
     * @return string La date formatée au format "jj-mm-aaaa HH:mm:ss".
     */
    public function formatDateCreation($date)
    {

        $dateTime = new DateTime($date);

        return $dateTime->format("d-m-Y H:i:s");

    }

}

?>