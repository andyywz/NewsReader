NewsReader.Views.FeedView = Backbone.View.extend({
  initialize: function() {
    this.feed = this.model;
    var renderCallback = this.render.bind(this);
    var that = this;
    var events = ["change", "add", "remove", "reset"];
    _(events).each(function (ev) {
      that.listenTo(that.model, ev, renderCallback);
    });
  },

  events: {
    "click button.refresh": "refresh"
  },

  render: function() {
    this.$el.html(JST['feeds/show']({ feed : this.model }));
    return this;
  },

  refresh: function () {
    var that = this;
    this.model.collection.fetch({
      success: function() {
        console.log("success");
        console.log(that.model.entries)
      },
      error: function (arg,resp) {
        console.log(resp)
      }
    });
  }
});