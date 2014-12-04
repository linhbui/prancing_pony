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
        var $button = this.$el.find('button.remove-favorite'); 
        var favorite = this.model.favorite();
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
        var $button = this.$el.find('button.add-favorite'); 
        var favorite = this.model.favorite();
        favorite.save({}, {
            success: function() {
                $button.addClass('remove-favorite');
                $button.removeClass('add-favorite')
                console.log("success!");
            },
            error: function() {
                console.log(":( so sad :( ")
            }
        });
    }
})
