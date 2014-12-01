PrancingPony.Views.ItemNew = Backbone.View.extend({
    //put tagName here?
    template: JST['items/new'],

    events: {
        'click #item-submit': 'submit'
    },


    render: function() {
        var content = this.template({
            item: this.model
        });
        this.$el.html(content);
        var $filepickerInput = this.$("input[type=filepicker]");
        filepicker.constructWidget($filepickerInput[0]);
        return this;
    },

    submit: function(event) {
        event.preventDefault();
        var attrs = this.$el.find("form").serializeJSON();
        function success () {
            Backbone.history.navigate("", { trigger: true });
        };
        this.model.set(attrs);
         if (this.model.isNew()) {
             this.collection.create(this.model, {
                 success: success,
                 error: function() {
                     console.log("sadly this doesn't work >_<")
                 }
             });
         } else {
             this.model.save({}, {
                 success: success
             }) 
         }
    }
})
