const path = require('path');

//Base file name
console.log(path.basename(__filename));

//Dir name
console.log(path.dirname(__filename));

//File extension (.js, .html, etc...)
console.log(path.extname(__filename));

//Create path objet
console.log(path.parse(__filename));

//Concatenate paths
console.log(path.join(__dirname, 'path_demo.js')); 