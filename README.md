# Apprendre NodeJS

> https://grafikart.fr/formations/nodejs

> https://www.youtube.com/playlist?list=PLjwdMgw5TTLV7VsXd9NOeq39soYXORezN

## Notre premier serveur

./Serveur-basics

**Gestion bas niveau sans librairies dédiées**

-   Objet http

    -   Permet de créer un serveur
    -   Ecouter l'arrivée des requetes et faire un traitement en fonction

-   Objet request et response : Pour réagir en fonction de ce qui est demandé

-   Lire un ficher avec fs.readFile

-   Gestion des URLs

-   Créer son propre systeme d'événements

## Les Streams

-   Méthode synchrone (bloquante) readFile()/writeFile() pour lire/écrire des petit fichiers.

-   Méthode asynchrone avec des streams pour les gros fichiers (redirection du flux de lecture vers plusieur flux d'écriture)
