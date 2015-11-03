import Ember from 'ember';

export default Ember.Component.extend({

  numRows: 10,
  numColumns: 10,
  tileSize: 10,
  width: Ember.computed('numColumns', function() {
    return this.get('tileSize')*this.get('numColumns');
  }),
  height: Ember.computed('numRows', function() {
    return this.get('tileSize')*this.get('numRows');
  }),
  grid: Ember.computed('numRows', 'numColumns', function() {
    let grid = [];
    for(var i = 0; i < this.get('numColumns'); i++){
      grid.push([]);
      for(var j = 0; j < this.get('numRows'); j++){
        grid[i].push(null);
      }
    }
    return grid;
  })
  // grid: Ember.computed('numRows', 'numColumns', function() {
  //   return Ember.HTMLBars.compile("<div id='hellllllo'>whaaaa</div>")
  // }),

  // generate a grid of divs 10 x 10
  // place 10 random mines
  //

  // didInsertElement() {
  //   this.createGame();
  // },

  // createGame() {
  //   this.grid = this.createGridData()
  // },

  // createGridData() {
  //   var grid = [];
  //   for(var i = 0; i < 3; i++){
  //     grid.push([]);
  //     for(var j = 0; j < 3; j++){
  //       grid[i].push('empty');
  //     }
  //   }
  //   return grid;
  // }

});
