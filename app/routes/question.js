import Ember from 'ember';

export default Ember.Route.extend({
  answerCount: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      console.log(params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      this.get('answerCount').add("1");
      newAnswer.save().then(function() {
        return question.save();
      });
      this.get('answerCount').add(params);
      this.transitionTo('question', params.question);
      }
    }
  });
