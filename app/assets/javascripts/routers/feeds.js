NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (data) {
    this.feeds = data.feeds;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var feedsCollection = this.feeds;
    feedsCollection.each(function (model, index) {
      console.log(model.escape('title'));
      console.log(typeof(model.escape('entries')))
    });
  }
});