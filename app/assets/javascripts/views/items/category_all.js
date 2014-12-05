PrancingPony.Views.CategoryAll = Backbone.CompositeView.extend({
    template: JST['items/category'],

    initialize:  function() {
        var items = this.collection;
        this.addIndexView(items);
    },

    addIndexView: function(items) {
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: items
        });
        this.addSubview("div.index-view", indexView);
    },

    render: function() {
        var content = this.template({
            items: this.collection,
            category: PrancingPony.category 
        });
        this.$el.html(content);
        this.attachSubviews();
        return this;
    }

});
