import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    thumbsUp(question) {
      var newValue = function() {
      question.incrementProperty('thumbsUp', 1);
      question.incrementProperty('totalVotes', 1);
      }
      this.sendAction('save4', newValue);
    },

    thumbsDown(question) {
      var newValue = function() {
      question.incrementProperty('thumbsDown', 1);
      question.incrementProperty('totalVotes', 1);
      }
      this.sendAction('save4', newValue);
    }
  }
});
