PrancingPony.Routers.Router = Backbone.Router.extend({
    initialize: function (options) {
        this.$rootEl = options.$rootEl;
    },

    routes: {
      "": "itemIndex",
      "items/new": "itemNew",
      "items/:id": "itemShow",
      "cart": "showCart"
      //"items/:id/edit": "edit"
    },
    
    showCart:  function() {
        var items = PrancingPony.cart.items();
        var showCartView = new PrancingPony.Views.CartShow({
            model: PrancingPony.cart,
            collection: items
        }) 
        this._swapView(showCartView);
    },

    itemIndex:  function() {
        PrancingPony.Collections.items.fetch();
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: PrancingPony.Collections.items
        });
        this._swapView(indexView);
    },

    itemNew: function() {
        var newItem = new PrancingPony.Models.Item();
        var newView = new PrancingPony.Views.ItemNew({
            collection: PrancingPony.Collections.items,
            model: newItem
        });
        this._swapView(newView);
    },

    itemShow: function(id) {
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
      $(document).scrollTop(0);    
    }

})
