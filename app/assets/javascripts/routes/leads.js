App.LeadsRoute = Ember.Route.extend({
  model: function() { return this.store.findAll('lead') }
})
