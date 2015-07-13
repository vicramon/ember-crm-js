App.ApplicationStore = DS.Store.extend({

});

App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  shouldReloadAll: function() { return true; }
});
