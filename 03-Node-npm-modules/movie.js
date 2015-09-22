var Director = require('./director.js');

var Movie = function () {
  this.setName(name);
  this.director = new Director();
};

Movie.prototype = {
	constructor: Movie,

	setName = function (attr, value) {
  		this.attributes = attr || 'Unknown';
	};

	getName = function (attr) {
  		return this.attributes;
	};

};
return Movie;


/*Movie.prototype.setDirector = function (name) {
  this.director.setName(name);
};

Movie.prototype.getDirector = function () {
  return this.director.getName();
};*/

module.exports = Movie;