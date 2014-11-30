PrancingPony.Routers.Router = Backbone.Router.extend({
    initialize: function (options) {
        this.$rootEl = options.$rootEl;
    },

    routes: {
      "": "index",
      "items/new": "new",
      "items/:id": "show",
      //"items/:id/edit": "edit"
    },

    index:  function() {
        PrancingPony.Collections.items.fetch();
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: PrancingPony.Collections.items
        });
        this._swapView(indexView);
    },

    new: function() {
        var newItem = new PrancingPony.Models.Item();
        var newView = new PrancingPony.Views.ItemNew({
            collection: PrancingPony.Collections.items,
            model: newItem
        });
        this._swapView(newView);
    },

    show: function(id) {
        var item = PrancingPony.Collections.items.getOrFetch(id);
        var showView = new PrancingPony.Views.ItemShow({
            model: item
        });
        this._swapView(showView);
    },

    _swapView: function (view) {
      this.currentView && this.currentView.remove();
      this.currentView = view;
      this.$rootEl.html(this.currentView.render().$el);
    }

})