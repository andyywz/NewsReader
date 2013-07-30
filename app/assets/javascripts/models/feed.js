NewsReader.Models.Feed = Backbone.Model.extend({
  initialize: function() {
    var entries = new NewsReader.Collections.Entries(this.get('entries'));
    this.entries = entries;
  }
});