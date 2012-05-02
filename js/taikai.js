var Player = function (name) {
  this.name = name;
  this.clan = arguments[1] || 'unaligned';
};

var Match = function () {
  this.players = [];
};
Match.prototype.addPlayer = function(name) {
  this.players.push(name);
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

  return this;
};

Taikai.prototype.setMatch = function() {
  var players = arguments;
  var match = new Match();

  for (var i = 0; i < players.length; i++) {
    match.addPlayer(players[i]);
  };

  this.matches.push(match);
};