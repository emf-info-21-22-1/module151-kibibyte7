<?php

class Task {

    private $pk_tache;
    private $titre;
    private $description;
    private $dateCreation;
    private $temps;
    private $etat;
    private $fk_projet;

    public function initFromDb($data){
        $this->pk_tache = $data["pk_tache"];
        $this->titre = $data["titre"];
        $this->description = $data["description"];
        $this->dateCreation = $data["dateCreation"];
        $this->temps = $data["temps"];
        $this->etat = $data["etat"];
        $this->fk_projet = $data["fk_projet"];
    }

    public function getPKTache(){
        return $this->pk_tache;
    }

    public function getTitre(){
        return $this->titre;
    }

    public function getDescription(){
            return $this->description;
    }

    public function getDateCreation(){
        return $this->dateCreation;
    }

    public function getTemps(){
        return $this->temps;
    }

    public function getEtat(){
        return $this->etat;
    }

    public function getFKProjet(){
        return $this->fk_projet;
    }
}

?>