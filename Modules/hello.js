// let hello = function () {
//     console.log("Hello world!!!");
// };
// let foo = "How are you?";
// let fooPrivate = "Nice to meet you";
// module.exports = {
//     hello: hello,
//     foo: foo,
// };

exports.hello = function () {
    console.log("Hello world!!!");
};

exports.goobye = function () {
    console.log("Goodbye. see you soon");
};

exports.foo = "How are you?";

let fooPrivate = "Nice to meet you";
