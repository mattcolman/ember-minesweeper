import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-square'],

  click: function() {
    console.log('hi click')
  }

});
