PrancingPony.Views.ItemElement = Backbone.View.extend({
    template: JST["items/element"],

    events: {
        "click .add-favorite": "addFavorite",
        "click .remove-favorite": "removeFavorite"
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
    },

    removeFavorite:  function() {
        event.preventDefault();
        var $button = $(event.currentTarget);
        var itemId = $button.data("item-id");
        var favorite = PrancingPony.favorites.getOrFetch(itemId);
        //custom AJAX request again?
        favorite.destroy({
            success: function() {
                $button.removeClass('remove-favorite');
                $button.addClass('add-favorite')
                console.log("hey success!!!!")
            },
            error: function() {
                console.log(":( so sad :( ")
            }
        });
    },

    addFavorite:  function(event) {
        event.preventDefault();
        var $button = $(event.currentTarget);
        var itemId = $button.data("item-id");
        var favorite = new PrancingPony.Models.Favorite();
        favorite.set("item_id", itemId);
        favorite.save({}, {
            success: function() {
                this.render();
            },
            error: function() {
                console.log(":( so sad :( ")
            }
        });
    }
})
