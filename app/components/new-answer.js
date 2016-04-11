import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.inject.service(),
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        content: this.get('content') ? this.get('content'): "",
        author: this.get('author') ? this.get('author'): "",
        question: this.get('question')
      };
      this.get('answerCount').add(params);
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
