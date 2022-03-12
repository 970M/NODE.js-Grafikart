let map = require("lodash/map");

let app = require("./app").start(1337);

console.log(
    map([1, 2, 3], function (n) {
        return n * 3;
    })
);

app.on("root", (response) => {
    response.write("Module: lodash est importé");
});

console.log("Server running at http://localhost:1337/");
