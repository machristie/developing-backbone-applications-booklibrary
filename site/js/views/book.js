
var app = app || {};

app.BookView = Backbone.View.extend({
    tagname: 'div',
    className: 'bookContainer',
    template: _.template( $('#bookTemplate').html() ),

    events: {
        'click button.delete': 'deleteBook'
    },

    render: function() {

        // this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    },

    deleteBook: function(e) {
        // Don't need this since not in a form
        //e.preventDefault();

        // Delete model
        this.model.destroy();

        // Delete view
        this.remove();
    }
});
