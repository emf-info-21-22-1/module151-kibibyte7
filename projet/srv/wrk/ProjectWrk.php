<?php
include_once 'connexion/Connexion.php';
include_once 'beans/Project.php';

/**
 * Classe représentant un projet de travail (ProjectWrk).
 *
 * @package wrk
 */
class ProjectWrk
{

    /**
     * Ajoute un nouveau projet.
     *
     * @param string $name Le nom du projet.
     * @param string $description La description du projet.
     * @param int $fk_user L'identifiant de l'utilisateur associé au projet.
     * @return bool Retourne true si le projet a été ajouté avec succès, sinon false.
     */
    public function addProject($name, $description, $fk_user)
    {

        $nameNeedsEscapes = preg_match('/<[^>]+>/', $name);
        $descriptionNeedsEscapes = preg_match('/<[^>]+>/', $description);

        if ($nameNeedsEscapes <> 0)
            $name = strip_tags($name);
        if ($descriptionNeedsEscapes <> 0)
            $description = strip_tags($description);


        $params = array("name" => $name, "description" => $description, "fk_user" => $fk_user);

        $affectedLines = Connexion::getInstance()->executeQuery("INSERT INTO t_projet(nom, description, fk_user) VALUES (:name, :description, :fk_user);", $params);

        return $affectedLines == 1;

    }

    /**
     * Charge les projets associés à un utilisateur.
     *
     * @param int $fk_user L'identifiant de l'utilisateur pour lequel charger les projets.
     * @return array Retourne un tableau contenant les informations des projets chargés.
     */
    public function loadProjects($fk_user)
    {

        $res = [];
        $i = 0;
        $params = array("fk_user" => $fk_user);

        $rows = Connexion::getInstance()->SelectQuery("SELECT * FROM t_projet WHERE fk_user = :fk_user", $params);

        foreach ($rows as $row) {

            $project = new Project();

            $project->initFromDb($row);

            $res[$i] = [
                "name" => $project->getNom(),
                "description" => $project->getDescription(),
                "dateCreation" => $project->getDateCreation(),
                "pk_projet" => $project->getPKProjet(),
                "fk_user" => $project->getFkUser()
            ];

            $i++;
        }

        return $res;
    }

    /**
     * Récupère un projet spécifique associé à un utilisateur.
     *
     * @param int $pk_projet L'identifiant unique du projet.
     * @param int $fk_user L'identifiant de l'utilisateur associé au projet.
     * @return Project|'' Retourne un objet Project si le projet est trouvé, sinon une chaîne vide.
     */
    public function getProject($pk_projet, $fk_user)
    {

        $params = array("pk_projet" => $pk_projet, "fk_user" => $fk_user);

        $row = Connexion::getInstance()->SelectSingleQuery("SELECT * FROM t_projet WHERE pk_projet=:pk_projet AND fk_user=:fk_user", $params);

        $res = '';

        if ($row) {

            $project = new Project();

            $project->initFromDb($row);

            $res = $project;

        }

        return $res;

    }
}

?>