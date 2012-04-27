var Player = function (name) {
  this.name = name;
  this.clan = arguments[1] || 'unaligned';
};

var Taikai = function () {
  this.ranking = [];
  this.players = {};
  this.rounds  = [];
  this.matches = [];
};

Taikai.prototype.addPlayer = function(name, clan) {
  this.players[name] = new Player(name, clan);
  this.ranking.push({
    name: this.players[name].name,
    clan: this.players[name].clan,
    GW: 0,
    TP: 0
  });
};