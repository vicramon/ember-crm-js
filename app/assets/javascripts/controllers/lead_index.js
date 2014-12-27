App.LeadIndexController = Ember.ObjectController.extend({

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving');
  }.property('isDirty', 'isSaving'),

  actions: {

    delete: function() {
      var self = this;
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('leads');
      });
    },

    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
    }
  }

});
