App.Router.reopen({
  location: 'auto',
  rootURL: '/'
})

App.Router.map(function() {
  this.resource('leads', { path: '/' })
});
