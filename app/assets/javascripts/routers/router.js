PrancingPony.Routers.Router = Backbone.Router.extend({
    initialize: function (options) {
        this.$rootEl = options.$rootEl;
    },

    routes: {
      "": "itemIndex",
      "items/new": "itemNew",
      "items/:id": "itemShow",
      "cart": "showCart",
      "favorites": "showFavorites",
      "category?q=:tagName": "showCategoryItems", 
      "categories/:id": "showCategoryItems"
      //"items/:id/edit": "edit"
    },
    
    showCart:  function() {
        PrancingPony.cart.fetch();
        var items = PrancingPony.cart.items();
        var showCartView = new PrancingPony.Views.CartShow({
            model: PrancingPony.cart,
            collection: items
        }) 
        this._swapView(showCartView);
    },

    showFavorites:  function() {
        var items = new PrancingPony.Collections.Items();
        items.fetch({ data: { favorite: true } });
        //PrancingPony.Collections.items.fetch({ data: { favorite: true } });
        var indexView = new PrancingPony.Views.ItemsIndex({
            //collection: PrancingPony.Collections.items
            collection: items
        });
        this._swapView(indexView);
    },

    showCategoryItems: function(id) {
        
    },
    //showCategoryItems: function(queryStr) {
        //var query = decodeURIComponent(queryStr);
        //var items = new PrancingPony.Collections.items();
        //items.fetch({ data: {category: encodeURIComponent(query)} });

        //var showCategoryView = new PrancingPony.Views.ItemsIndex({ 
            //collection: items 
        //});
        //this._swapView(showCategoryView);
    //},

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
