import DS from 'ember-data';

export default DS.Model.extend({
  // game model
  gameId: DS.attr('number'),
  gameTiles: DS.hasMany('gameTile'),

  init() {
    console.log('hi init')
    // gameTiles = 10.times do { GameTile.create({isBomb: true, beenClicked: false}) }
    // this.set('gameTiles', gameTiles)
  }
});
