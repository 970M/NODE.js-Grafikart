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

## ExpressJS

> http://expressjs.com/

> https://www.digitalocean.com/community/tutorials?q=express

#### Projet Livre d'Or

Livre d'or utilisant ExpressJS permettant aux utilisateur de poster des message et de les afficher.
Utilise une base de donnée mySQL

**Initialisation du projet:**

    mkdir LivreOr
    cd LivreOr
    touch server.js
    npm init
    npm i -S express

**Module permettant de redémarrer automatiquement le server (~ live server)**

    npm i -G nodemon // Instalation global

Configurer package.json: "start": "nodemon server.js"

**Lancer le server:**

    npm run start

**Moteur de vue EJS**

    npm i -S ejs

> https://ejs.co/#promo

> https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr#transmettre-les-donnees-aux-vues-et-aux console.log("session.error:", request.session);-partiels

**Charger un CSS en utilisant Semantic-UI**

    https://semantic-ui.com/
    get started -> download zip // Semantic-UI-CSS-master.zip
    cd LivreOr
    mkdir public
    cd public
    mkdir semantic // Remplir le dossier avec le contenu du zip

TS=11:50

**Bodyparsing: body-parser semble déprécié**

> http://expressjs.com/fr/api.html#req.body

=> Nouvelle méthode d'express à la place

TS=21:00

**Mise en place d'une session pour conserver le message d'erreur et l'afficher apres une redirection**

ExpressJS ne gere pas ça, il faut installer un autre module

    npm i -S expression-session

Création d'un objet session permettant de stocker des informations au niveau de la requete

**Gestion de la session par express-session mis dans un middleware flash.js**

Créer dans request une methode flas(): request.flash()

---

## Commits comments

`<type>(<portée>): <sujet>`
`<description>`
`<footer>`

**Type** définit le type de commit

-   build: Système de build (example : gulp, webpack, npm)
-   ci: Intégration continue (example scopes: Travis, Circle, BrowserStack, SauceLabs)
-   docs: Documentation
-   feat: Ajout d'une fonctionnalité
-   fix: Correction de bogue
-   perf: Amélioration des performances
-   refactor: Changement du code qui ne change rien au fonctionnement
-   style: Changement du style du code (sans changer la logique)
-   test: Modification des tests

**Portée** définit quelle partie de votre librairie / application est affectée par le commit (cette information est optionnelle)

**Sujet** contient une description succinte des changements

-   En utilisant l'impératif présent ("change", et non pas "changed" ou "changes")
-   Sans majuscule au début
-   Pas de "." à la fin de la description

**Description** permet de détailler plus en profondeur les motivations derrière le changement. Les règles sont les mêmes que pour la partie Sujet.

**Footer** contient les changements importants (Breaking Changes) et les références à des issues GitHub / GitLab ou autre.
