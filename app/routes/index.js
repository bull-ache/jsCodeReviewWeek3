import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    return Ember.RSVP.hash({
      answers: this.storefindAll('answer'),
      questons: thisstorefindAll('question')
    });
  } 
});
