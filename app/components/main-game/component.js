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
  // grid: Ember.computed('numRows', 'numColumns', function() {
  //   return Ember.HTMLBars.compile("<div id='hellllllo'>whaaaa</div>")
  // }),

  // generate a grid of divs 10 x 10
  // place 10 random mines
  //

  didInsertElement() {
    this.createGame();
  },

  createGame() {
    for (let i = 0; i < this.get('numColumns'); i++) {
      for (let j = 0; j < this.get('numRows'); j++) {
        let div = `<div id="${i},${j}" class="empty" style="width:${this.get('tileSize')}px; height:${this.get('tileSize')}px;"></div>`
        div = $(div)
        Ember.$('#game').append(div)
      }
    }
  },

  actions: {
    init: function() {
    }
  }
});
