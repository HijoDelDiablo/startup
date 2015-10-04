var Movie = require('./movie.js'),
var MadMax = new Movie();

console.log(MadMax.getName());
MadMax.setName('Mad Max: Fury Road');

console.log(MadMax.getDirector());
MadMax.setDirector('George Miller');