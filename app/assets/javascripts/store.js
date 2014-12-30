App.ApplicationStore = DS.Store.extend({

});

App.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});

DS.RESTAdapter.reopen({
  namespace: 'api/v1'
});
