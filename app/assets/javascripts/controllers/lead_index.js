App.LeadIndexController = Ember.Controller.extend({

  showUnsavedMessage: function() {
    return this.get('model.hasDirtyAttributes') && !this.get('model.isSaving');
  }.property('model.hasDirtyAttributes', 'model.isSaving'),

  STATUSES: function(){
    return App.Lead.STATUSES;
  }.property(),

  actions: {

    destroy: function() {
      var self = this;
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('leads');
      });
    },

    saveChanges: function() {
      if (this.get('model.hasDirtyAttributes')) this.get('model').save();
    }
  }

});
