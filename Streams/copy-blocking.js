let fs = require("fs");

// Methode pas tres performante, data contient tout le fichier (processus bloquant: attendre la fin de la lecture pour lancer l'ecriture)
fs.readFile("video.mp4", (err, data) => {
    if (err) throw err;

    fs.writeFile("video-copy.mp4", data, (err) => {
        if (err) throw err;

        console.log("Le fichier a bien été copié");
    });
});

// https://devdocs.io/node/fs#fs.writeFile()
