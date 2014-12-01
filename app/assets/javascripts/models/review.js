PrancingPony.Models.Review = Backbone.Model.extend({
    initialize: function(options) {
        this.item = options.item
    },
    
    date: function() {
        var dateStr = this.get('updated_at');
        var dateObj = new Date(dateStr);
        var date = dateObj.getDate().toString(),
            month = (dateObj.getMonth() + 1).toString(),
            year = dateObj.getFullYear().toString();
        return month + "/" + date + "/" + year;
    }
})
