var Player = function (name) {
  this.name = name;
  this.clan = arguments[1] || 'unaligned';
};

var Taikai = function () {
  this.ranking = [];
  this.players = [];
  this.log = [];
};

Taikai.prototype.addPlayer = function(name, clan) {
  this.players.push(new Player(name, clan));
};