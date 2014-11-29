PrancingPony.Views.ItemElement = Backbone.View.extend({
    template: JST["items/element"],
    
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
    },

})
