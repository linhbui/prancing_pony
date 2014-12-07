PrancingPony.Views.FavoriteAll = Backbone.CompositeView.extend({
    template: JST['items/favorite'],

    initialize:  function(options) {
        this.favorite = options.favorite;
        var items = this.collection;
        this.addIndexView(items);
    },

    addIndexView: function(items) {
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: items,
            favorite: this.favorite
        });
        this.addSubview("div.index-view", indexView);
    },

    render: function() {
        var content = this.template({
            items: this.collection,
        });
        this.$el.html(content);
        this.attachSubviews();
        return this;
    }

});
