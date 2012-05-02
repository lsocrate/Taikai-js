function getBaseTaikai() {
  var taikai = new Taikai().addPlayer('Anna', 'Crab').addPlayer('Bob', 'Crab').addPlayer('Charles', 'Crab').addPlayer('David', 'Crab').addPlayer('Eduard', 'Crab');

  return taikai;
};

test("Add player", function() {
  var taikai = new Taikai();
  taikai.addPlayer('Anna', 'Scorpion');
  equal(taikai.players.Anna.name, 'Anna');
  equal(taikai.players.Anna.clan, 'Scorpion');
});

test("Set match", function() {
  var taikai = getBaseTaikai();
  taikai.setMatch('Anna', 'Bob', 'Charles', 'David');
  console.log(taikai);
  deepEqual(taikai.matches[0].players, ['Anna', 'Bob', 'Charles', 'David']);
});