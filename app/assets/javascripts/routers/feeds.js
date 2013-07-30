NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (data) {
    this.feeds = data.feeds;
  },

  routes: {
    "": "index",
    "feeds/:feed_id/entries": "show"
  },

  index: function () {
    var feedsCollection = this.feeds;
    var view = new NewsReader.Views.FeedsIndexView({ collection: feedsCollection});
    $('body').html(view.render().$el);
  },

  show: function (id) {
    var feed = this.feeds.get(id);
    var view = new NewsReader.Views.FeedView({ model: feed });
    $('body').html(view.render().$el);
  }

});