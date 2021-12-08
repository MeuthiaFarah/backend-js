// manggil controller trus dimasukin ke variable
const {index, store} = require("./FruitController.js");

function main(){
    index();
    store("kelapa");
}

main();