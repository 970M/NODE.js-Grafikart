let fs = require("fs");

let file = "video.mp4";

let read = fs.createReadStream(file);
let write = fs.createWriteStream("video-copy.mp4");

fs.stat(file, (err, stat) => {
    let total = stat.size;
    let progress = 0;

    // Actions suite à lecture des tronçons
    read.on("data", (chunk) => {
        progress += chunk.length;
        console.log("J'ai lu " + Math.round((100 * progress) / total) + "%");
    });

    // Actions suite à fin de lecture du flux
    read.on("end", () => {
        console.log("J'ai fini de lire le fichier");
    });

    // Branchement du flux de lecture au flux d'ecriture
    read.pipe(write);

    // Actions suite à fin d'écriture du flux
    write.on("finish", () => {
        console.log("Le fichier a bien été copié");
    });
});

// https://devdocs.io/node/fs#fs.createReadStream()
// https://nodejs.org/api/stream.html#event-data
