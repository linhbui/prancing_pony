PrancingPony.Views.itemsIndex = Backbone.CompositeView.extend({
    template: JST['items/index'],
    
    events: {
        "click button.delete-item": "deleteItem"
    },
    
    deleteItem: function(event){
        event.preventDefault();
        var $button = $(event.currentTarget);
        var itemId = $button.data("id");
        var item = this.collection.get(itemId);
        item.destroy();
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
        var itemPieceView = new PrancingPony.Views.ItemPiece({
            model: model
        })
        this.addSubview("ul.item-items", itemPieceView)
    },
    
    removeView: function(model){
        var subview = _.find(this.subviews("ul.list-items"), function(subview){
            if(subview.model.id === model.id){
                return true;
            }
        })
        this.removeSubview("ul.list-items", subview);
    },

    
    render: function () {
        var content = this.template();
        this.$el.html(content);
        this.attachSubviews();
        return this;
    },
    

});

