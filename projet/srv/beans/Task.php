<?php

/**
 * Classe Task représentant une tâche.
 */
class Task
{

    private $pk_tache;
    private $titre;
    private $description;
    private $dateCreation;
    private $temps;
    private $etat;
    private $fk_projet;

    /**
     * Initialise les propriétés de l'objet à partir des données de la base de données.
     *
     * @param array $data Tableau associatif contenant les données de la tâche.
     *                    Doit contenir les clés "pk_tache", "titre", "description", "dateCreation", "temps", "etat", et "fk_projet".
     * @return void
     */
    public function initFromDb($data)
    {
        $this->pk_tache = $data["pk_tache"];
        $this->titre = $data["titre"];
        $this->description = $data["description"];
        $this->dateCreation = $data["dateCreation"];
        $this->temps = $data["temps"];
        $this->etat = $data["etat"];
        $this->fk_projet = $data["fk_projet"];
    }

    /**
     * Obtient l'identifiant unique de la tâche.
     *
     * @return int L'identifiant unique de la tâche.
     */
    public function getPKTache()
    {
        return $this->pk_tache;
    }

    /**
     * Obtient le titre de la tâche.
     *
     * @return string Le titre de la tâche.
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Obtient la description de la tâche.
     *
     * @return string La description de la tâche.
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Obtient la date de création de la tâche.
     *
     * @return string La date de création de la tâche.
     */
    public function getDateCreation()
    {
        return $this->dateCreation;
    }

    /**
     * Obtient le temps estimé pour la tâche.
     *
     * @return int|null Le temps estimé pour la tâche, ou null s'il n'est pas défini.
     */
    public function getTemps()
    {
        return $this->temps;
    }

    /**
     * Obtient l'état actuel de la tâche.
     *
     * @return string L'état actuel de la tâche.
     */
    public function getEtat()
    {
        return $this->etat;
    }

    /**
     * Obtient l'identifiant du projet auquel la tâche est associée.
     *
     * @return int L'identifiant du projet auquel la tâche est associée.
     */
    public function getFKProjet()
    {
        return $this->fk_projet;
    }
    
}

?>