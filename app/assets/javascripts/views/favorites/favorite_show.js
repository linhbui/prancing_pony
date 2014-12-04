PrancingPony.Views.FavoriteShow = Backbone.CompositeView.extend({
    template: JST['favorites/show'],
    
    events: {
        "click button#button-remove-favorite": "deleteFavorite"
    },
    
    deleteFavorite: function(event){
        event.preventDefault();
        var $button = $(event.currentTarget);
        var favoriteId = $button.data("id");
        var favorite = this.collection.get(favoriteId);
        favorite.destroy();
    },
    
    initialize: function () {
        this.listenTo(this.collection, "add", this.addView);
        this.listenTo(this.collection, "sync", this.render);
        this.listenTo(this.collection, "remove", this.removeView);
        
        this.collection.each(function(item){
            this.addView(item)
        }.bind(this))
    },
    
    addView: function(model){
        var favoriteItemView = new FavoriteItem({
            model: model
        });
        this.addSubview("div.list-favorite-items", favoriteItemView)
    },
    
    removeView: function(model){
        var subview = _.find(this.subviews("div.list-favorite-items"), function(subview){
            if(subview.model.id === model.id){
                return true;
            }
        })
        this.removeSubview("div.list-favorite-items", subview);
    },

    
    render: function () {
        var content = this.template();
        this.$el.html(content);
        this.attachSubviews();
        this.masonry();
        return this;
    },
    
    masonry: function() {
        var $container = $('.list-favorite-items');
        var msnry = new Masonry($container[0], {
            itemSelector: '.item-thumbnail',
            columnWidth: '.item-thumbnail',
            isAnimated: true,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }   
        });
        imagesLoaded( $container, function() {
        msnry.layout();
        });
    }
});
