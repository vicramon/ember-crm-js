App.LeadsNewRoute = Ember.Route.extend({

  setupController: function(controller) {
    controller.set('fields', {})
   controller.set('showError', false)
  }

})
