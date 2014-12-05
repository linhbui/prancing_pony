PrancingPony.Views.FavoriteAll = Backbone.CompositeView.extend({
    template: JST['items/favorite'],

    initialize:  function() {
        var items = this.collection;
        this.addIndexView(items);
    },

    addIndexView: function(items) {
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: items,
            model: this.model
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
