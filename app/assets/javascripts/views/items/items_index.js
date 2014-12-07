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

        this.listenTo(this.collection, "sync", (function () {
            this.allItems = this.collection.models.concat([]);
        }).bind(this))

        this.listenTo(searchService, "search", this.filterCollection);
        this.collection.each(function(item){
            this.addView(item)
        }.bind(this))
    },
// search service, when string empty, trigger search with null
// change filter collection, when receive null search items, put everything back in the set
    filterCollection: function(searchResultItems) {
        var filteredItems = _(this.allItems).filter(function (item) {
            return _.chain(searchResultItems).pluck("id").contains(item.id).value();
        });

        console.log(filteredItems);
        this.collection.set(filteredItems);
        console.log(searchResultItems);    
    },

    addView: function(model){
        console.log("adding View");
        var itemElementView = new PrancingPony.Views.ItemElement({
            model: model
        });
        this.addSubview("div.list-items", itemElementView);
        this.masonry();
    },

    removeView: function(model){
        var subview = _.find(this.subviews("div.list-items"), function(subview){
            if(subview.model.id === model.id){
                return true;
            }
        })
        this.removeSubview("div.list-items", subview);
        this.masonry();
    },


    listenForScroll: function () {
        $(window).off("scroll"); // remove past view's listeners
        var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
        $(window).on("scroll", throttledCallback);
    },

    nextPage: function () {
        var self = this;
        if (!this.fetching && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
            var height = $(window).scrollTop();
            console.log("scrolled to bottom!");
            if (self.collection.page < self.collection.total_pages) {
                self.fetching = true;
                self.stopListening(self.collection, 'sync');
                self.collection.fetch({
                    data: { page: self.collection.page + 1, category: this.model },
                    remove: false,
                    wait: true,
                    success: function () {
                        console.log("successfully fetched page " + self.collection.page);
                        //$(window).scrollTo(height);
                        setTimeout(function() {
                            var $container = $('.list-items');
                            self.masonry();
                            self.fetching = false;
                        }, 10);
                    }
                });
            }
        }
    },

   render: function () {
        var content = this.template();
        var num = PrancingPony.cart.count();
        $("#cart-num").html(num);
        this.$el.html(content);
        this.attachSubviews();
        this.listenForScroll();
        this.masonry();
        return this;
    },

    masonry: function() {
        var $container = $('.list-items');
        this.msnry = new Masonry($container[0], {
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
            this.msnry.layout();
        }.bind(this));
    }
});

