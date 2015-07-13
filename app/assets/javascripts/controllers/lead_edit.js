App.LeadEditController = Ember.Controller.extend({

  actions: {

    saveChanges: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('lead');
      });
    },

    cancel: function() {
      this.get('model').rollbackAttributes();
      this.transitionToRoute('lead');
    }

  }

});
