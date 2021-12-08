// manggil data dan dimasukin ke variable
const fruits = require("./data.js");

function index() {
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

// panggil functionnya
/* index(); */

function store(name){
    fruits.push(name);
    index();
}

module.exports = {index, store};