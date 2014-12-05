PrancingPony.Views.ItemsIndex = Backbone.CompositeView.extend({
    template: JST['items/index'],
    
    events: {
        "click button.delete-item": "deleteItem"
        //"click .add-favorite": "addFavorite",
        //"click .remove-favorite": "removeFavorite"
    },
    
    deleteItem: function(event){
        event.preventDefault();
        var $button = $(event.currentTarget);
        var itemId = $button.data("id");
        var item = this.collection.get(itemId);
        item.destroy({
            success: function() {
                console.log("success!");
            },
            error: function() {
                console.log(">_< >_<")
            }
        });
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
        var itemElementView = new PrancingPony.Views.ItemElement({
            model: model
        });
        this.addSubview("div.list-items", itemElementView);
    },
    
    removeView: function(model){
        var subview = _.find(this.subviews("ul.list-items"), function(subview){
            if(subview.model.id === model.id){
                return true;
            }
        })
        this.removeSubview("div.list-items", subview);
    },

    
    render: function () {
        var content = this.template();
        var num = PrancingPony.cart.count();
        $("#cart-num").html(num);
        this.$el.html(content);
        this.attachSubviews();
        this.masonry();
        return this;
    },
    
    masonry: function() {
        var $container = $('.list-items');
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

