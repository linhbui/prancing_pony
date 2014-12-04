PrancingPony.Views.FavoriteItem = Backbone.View.extend({
    template: JST["items/favorite_item"],
    
    attributes: function() {
        return {
            'data-favorite-id': this.model.id
        }
    },

    render: function() {
        var content = this.template({
            favorite: this.model
        });
        this.$el.html(content);
        return this;
    },

})
