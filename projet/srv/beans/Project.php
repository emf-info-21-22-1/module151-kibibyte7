<?php

/**
 * Classe Project représentant un projet.
 */
class Project {
    private $pk_projet;
    private $nom;
    private $description;
    private $dateCreation;
    private $fk_user;

   /**
     * Initialise les propriétés de l'objet à partir des données de la base de données.
     *
     * @param array $data Tableau associatif contenant les données du projet.
     *                    Doit contenir les clés "pk_projet", "nom", "description", "dateCreation", et "fk_user".
     * @return void
     */
    public function initFromDb($data) {
        $this->pk_projet = $data["pk_projet"];
        $this->nom = $data["nom"];
        $this->description = $data["description"];
        $this->dateCreation = $data["dateCreation"];
        $this->fk_user = $data["fk_user"];
    }

    /**
     * Obtient l'identifiant unique du projet.
     *
     * @return int L'identifiant unique du projet.
     */
    public function getPKProjet() {
        return $this->pk_projet;
    }

    /**
     * Obtient le nom du projet.
     *
     * @return string Le nom du projet.
     */
    public function getNom() {
        return $this->nom;
    }

    /**
     * Obtient la description du projet.
     *
     * @return string La description du projet.
     */
    public function getDescription() {
        return $this->description;
    }

    /**
     * Obtient la date de création du projet.
     *
     * @return string La date de création du projet.
     */
    public function getDateCreation() {
        return $this->dateCreation;
    }

    /**
     * Obtient l'identifiant de l'utilisateur associé au projet.
     *
     * @return int L'identifiant de l'utilisateur associé au projet.
     */
    public function getFkUser() {
        return $this->fk_user;
    }

}
?>