define([
  'backbone',
  'rdust!templates/main'
], function (Backbone, template) {
    var MainView = Backbone.View.extend({
        el: '#container',

        events: {

        },

        initialize: function () {
            this.render();
        },

        render: function (title) {
            var self = this;
            template.render({}, function (err, out) {
                $('#container').html(out);
            });
        }

    });

    return MainView;
});
