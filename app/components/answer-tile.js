import Ember from 'ember';

export default Ember.Component.extend({
  fullAnswer: Ember.computed('answer.content', 'answer.author', function() {
    return this.get('answer.content') + ' Posted By:' + this.get('answer.author');

  })
});
