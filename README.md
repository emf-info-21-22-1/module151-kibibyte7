# Projet
Repository du projet personnel du module 151

## CrystalDevTracker_

### Description du projet
Votre descriptif du cahier des charges ici

### Arborescence
- L'analyse et les différents tests technos sont effectués dans /exercices
- La partie cliente qui regroupe tous les fichiers nécessaires au fonctionnement du client développé en HTML/CSS/JS se trouve dans /projet/client </br>
- La partie serveur qui regroupe tous les fichiers nécessaires au fonctionnement du serveur développé en PHP se trouve dans /projet/server

### Fonctionnalités disponibles
- [X] Résistance aux injections HTML/CSS/JS côté client
- [X] Résistance aux injections SQL côté serveur
- [X] Création d'un utilisateur
- [X] Vérification de l'existence d'un nom d'utilisateur
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
