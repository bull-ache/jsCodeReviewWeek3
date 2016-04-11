import Ember from 'ember';

export default Ember.Service.extend({
  answers: [],

    add(params) {
      this.get('answers').pushObject(params);
    }
  });
