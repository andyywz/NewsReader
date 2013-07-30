NewsReader.Views.FeedsIndexView = Backbone.View.extend({
  render: function(){
    this.$el.html(JST['feeds/index']({feeds: this.collection}))
    return this;
  }
})