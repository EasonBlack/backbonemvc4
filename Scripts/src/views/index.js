define([
  'backbone',
  'rdust!templates/index'
], function (Backbone, template) {
    var IndexView = Backbone.View.extend({
        el: '#container',

        events: {
           'click #btn': 'getMain'
        },

        initialize: function () {
            this.render();
        },

        getMain: function () {
            Backbone.history.fragment = null;
            Backbone.history.navigate(window.prefix + "main?a", { trigger: true });
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
