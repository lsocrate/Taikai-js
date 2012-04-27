test("Add player", function() {
  var taikai = new Taikai();
  taikai.addPlayer('Siri', 'Scorpion');
  equal(taikai.players.Siri.name, 'Siri');
  equal(taikai.players.Siri.clan, 'Scorpion');
});