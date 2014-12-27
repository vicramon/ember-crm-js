App.Lead = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  status: DS.attr('string', { defaultValue: 'new' }),
  notes: DS.attr('string'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

});

App.Lead.reopenClass({
  STATUSES: ['new', 'in progress', 'closed', 'bad'],

  valid: function(fields) {
    return fields.firstName && fields.lastName;
  }

});
