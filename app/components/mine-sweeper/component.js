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
  // grid: [[]],
  grid: Ember.computed('numColumns', 'numRows', function() {
    let grid = [];
    for(var i = 0; i < this.get('numColumns'); i++){
      grid.push([]);
      for(var j = 0; j < this.get('numRows'); j++){
        grid[i].push(null);
      }
    }
    return grid;
  }),
  // displayGrid: Ember.computed('grid', function() {
  //   return [[null, null], [null, null]]
  // }),
  // grid: Ember.computed('numRows', 'numColumns', function() {
  //   return Ember.HTMLBars.compile("<div id='hellllllo'>whaaaa</div>")
  // }),

  // generate a grid of divs 10 x 10
  // place 10 random mines
  //

  didInsertElement() {
    // console.log("didInsertElement")
    // this.grid = this.generateGrid();
    // this.layMines();
  },

  generateGrid() {
    let grid = [];
    for(var i = 0; i < this.get('numColumns'); i++){
      grid.push([]);
      for(var j = 0; j < this.get('numRows'); j++){
        grid[i].push(null);
      }
    }
    return grid;
  },

  layMines() {
    var squares = _.flatten(this.grid)
    var numMines = 10
    for (var i = 0; i < numMines; i++) {
      squares[i] = 'x'
    };
  }
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
