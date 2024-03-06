<?php
class Project {
    private $pk_projet;
    private $nom;
    private $description;
    private $dateCreation;
    private $fk_user;

    public function initFromDb($data){
        $this->pk_projet = $data["pk_projet"];
        $this->nom = $data["nom"];
        $this->description = $data["description"];
        $this->dateCreation = $data["dateCreation"];
        $this->fk_user = $data["fk_user"];
    }

    public function getPKProjet(){
        return $this->pk_projet;
    }

    public function getNom(){
        return $this->nom;
    }

    public function getDescription(){
        return $this->description;
    }
    
    public function getDateCreation(){
        return $this->dateCreation;
    }

    public function getFkUser(){
        return $this->fk_user;
    }
}
?>