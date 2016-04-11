import Ember from 'ember';

export default Ember.Component.extend({

  areDetailsShowing: false,


    actions: {
      detailsShow: function() {
        this.set('areDetailsShowing', true);
      },
      detailsHide: function() {
        this.set('areDetailsShowing', false);
      }
    }
});
