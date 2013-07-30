window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    var feeds = new NewsReader.Collections.Feeds(data.feeds);

    new NewsReader.Routers.Feeds({ feeds: feeds });
    Backbone.history.start();
  }
};

$(document).ready(function(){});



// change feed model to make entry collection and then the collection in turn
// makes entry models. :D