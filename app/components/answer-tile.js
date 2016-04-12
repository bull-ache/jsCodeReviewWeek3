import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),
  fullAnswer: Ember.computed('answer.content', 'answer.author', function() {
    return this.get('answer.content') + ' Posted By:' + this.get('answer.author')
  }),

    actions: {
      addToFavorite(answer) {
        this.get('favorite').add(answer);
      }
    }
});
