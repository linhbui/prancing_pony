// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.serializejson
//= require jquery_ujs
//= require bootstrap-sprockets
//= require masonry.pkgd
//= require imagesloaded.pkgd
//= require underscore
//= require backbone
//= require prancing_pony
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

window.searchService = {};

_.extend(searchService, Backbone.Events);

$.ItemsSearch = function (el) {
    this.$el = $(el);
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find(".nav-items-search-result");
    this.$input.on("input", this.handleInput.bind(this));
};

$.ItemsSearch.prototype.handleInput = function (event) {
    //if (this.$input.val() == "") {
        //this.renderResults([]);
        //return;
    //}
    var search = this.$input.val();
    console.log(search);
    $.ajax({
        url: "/api/items/search",
        dataType: "json",
        method: "GET",
        data: { query: this.$input.val() },
        success: this.renderResults.bind(this)
    });
};

$.ItemsSearch.prototype.renderResults = function (items) {
    this.$ul.empty();

    //for (var i = 0; i < items.length; i++) {
        //var item = items[i];

        //var $a = $("<a></a>");
        //$a.text(item.title);
        //$a.attr("href", "#/items/" + item.id);

        //var $li = $("<li></li>");
        //$li.append($a);

        //this.$ul.append($li);
    //}

    searchService.trigger("search", items);
};

$.fn.itemsSearch = function () {
    return this.each(function () {
        new $.ItemsSearch(this);
    });
};
