PrancingPony.Views.CartItemView = Backbone.View.extend({
    template: JST["items/cart_item"],
    
    attributes: function() {
        return {
            'data-item-id': this.model.id
        }
    },

    render: function() {
        var content = this.template({
            item: this.model
        });
        this.$el.html(content);
        return this;
    }
});
