# Projet
Repository du projet personnel du module 151

## CrystalDevTracker_

### Description du projet
Ce projet est un outil qui va permettre de faire de la gestion de projet, elle vise les devs principalement. Dans ce site on pourra créer des projets, et gérer les tâches qui y sont liés. Une fois la tâche créée on pourra éditer les détails, notemment ajouter les heures passé dessus.

### Poruquoi ce projet ?
J’ai choisi de faire ce projet car il peut m’être très utile dans le cadre pro, et je compte également le faire évouler d’avantage dans un futur proche.

### Arborescence
- L'analyse et les différents tests technos sont effectués dans /exercices
- La partie cliente qui regroupe tous les fichiers nécessaires au fonctionnement du client développé en HTML/CSS/JS se trouve dans /projet/client </br>
- La partie serveur qui regroupe tous les fichiers nécessaires au fonctionnement du serveur développé en PHP se trouve dans /projet/server

### Fonctionnalités disponibles
- [X] Résistance aux injections HTML/CSS/JS côté client
- [X] Résistance aux injections SQL côté serveur
- [X] Création d'un utilisateur
- [X] Vérification de la complexité du mot de passe
- [X] Se connecter
- [X] Se déconnecter
- [X] Ajouter un projet
- [X] Ajouter une tâche
- [X] Suppression d'une tâche
- [X] Modification de l'état d'une tâche
- [ ] Édition du détail de la tâche (nom, description, temps passé dessus)

### Liens sur l'hébergement
- **[Page d'accueil](https://abrahaml.emf-informatique.ch/151/client/)**
- **[Page d'inscription](https://abrahaml.emf-informatique.ch/151/client/register)**
- **[Page de connexion](https://abrahaml.emf-informatique.ch/151/client/login)**
- **[Page du tableau de bord](https://abrahaml.emf-informatique.ch/151/client/dashboard)** (Accessible seulement si l'utilisateur est connecté)
- **[Page d'aide](https://abrahaml.emf-informatique.ch/151/client/about)**

### Endpoints
- **/srv/projectsevices.php**
- **/srv/tasksevices.php**
- **/srv/usersevices.php**
- **/srv/session.php**

### Technologies utilisées pour le client
- **[Next.js v14.1.0](https://nextjs.org/)**
- **[Tailwind CSS v3.3.0](https://tailwindcss.com/)**

### Technologies utilisées pour le serveur
- **[PHP v8.1](https://www.php.net/manual/fr/intro-whatis.php)**
- **[PDO](https://www.php.net/manual/fr/book.pdo.php)**
