define([
  'backbone',
  'rdust!templates/index'
], function (Backbone, template) {
    var IndexView = Backbone.View.extend({
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

    return IndexView;
});
