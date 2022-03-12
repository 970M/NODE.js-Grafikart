let demo = require("./hello");

// Ok
demo.hello();
demo.goobye();
console.log(demo.foo);

// Ko: undefined
console.log(demo.fooPrivate);
