import Ember from 'ember';

export function questionRating(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 4) {
    return Ember.String.htmlSafe('<h5>!!!!</h5>');
  }
  else if(question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<h5>!!!</h5>');
  }
  else if(question.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<h5>!!</h5>');
  }
  else if(question.get('answers').get('length') >= 1) {
    return Ember.String.htmlSafe('<h5>!</h5>');
  }
}

export default Ember.Helper.helper(questionRating);
