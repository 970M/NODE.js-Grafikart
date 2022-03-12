let app = require("./app").start(1337);
app.on("root", (response) => {
    response.write("Module: Je suis à la racine");
});
console.log("Server running at http://localhost:1337/");
