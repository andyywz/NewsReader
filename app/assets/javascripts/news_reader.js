window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    // console.log(data.feeds);
    var feeds = new NewsReader.Collections.Feeds(data.feeds);
    console.log("Before");
    console.log(feeds);
    new NewsReader.Routers.Feeds({ feeds: feeds });
    Backbone.history.start();
  }
};

$(document).ready(function(){});
