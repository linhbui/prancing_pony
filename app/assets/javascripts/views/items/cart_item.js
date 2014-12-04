PrancingPony.Views.CartItemView = Backbone.View.extend({
    template: JST["items/cart_item"],
    
    events: {
        "change input.quantity-input": 'setQuantity'
    },

    setQuantity: function() {
        var input = this.$el.find('input.quantity-input');
        var quantity = input.val();
        this.model.set("cart-quantity", quantity);
    },

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
