PrancingPony.Views.ItemsAll = Backbone.CompositeView.extend({
    template: JST['items/all'],

    initialize:  function() {
        this.addView(this.collection).bind(this);
    },

    addView: function(items) {
        var indexView = new PrancingPony.Views.ItemsIndex({
            collection: items
        });
        this.addSubview("div.index-view", indexView);
    },

    render: function() {
        var content = this.template({
            items: this.collection
        });
        this.$el.html(content);
        return this;
    }

});
