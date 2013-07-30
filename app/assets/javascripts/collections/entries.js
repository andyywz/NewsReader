NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,
  url: '/feeds/:id/entries'
});