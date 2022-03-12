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

./Steams

-   Méthode synchrone (bloquante) readFile()/writeFile() pour lire/écrire des petit fichiers.

-   Méthode asynchrone avec des streams pour les gros fichiers (redirection du flux de lecture vers plusieur flux d'écriture)

## Les Modules

./Modules

Séparer le code en plusieurs fichiers afin de pouvoir mieux s'organiser.
Fichiers isolés.

-   Module personel

    -   Module basic avec module.exports

    -   Creation d'un serveur avec evenement (./Server-basics/server-event.js) utilisant un module

-   npm: télécharger des modules

    `npm init`

    -   Exemple d'import avec lodash

        `npm i -S lodash // npm instal --save lodash `

    -   Mise en place d'ExpressJS en utilisant npm

        `npm i -S express`

-   Reconstruire le repertoire node_modules et récupérer les modules du projets à partir des infos dans package.json :

    `npm install`
