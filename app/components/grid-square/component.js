import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-square'],

  actions: {
    handleClick: function() {
      console.log('handle click');
    }
  }
});
