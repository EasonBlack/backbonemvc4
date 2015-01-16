define([
  'backbone',
  'rdust!templates/main'
], function (Backbone, template) {
    var MainView = Backbone.View.extend({
        el: '#container',

        events: {
            'click #btnA': 'getChange'
        },

        initialize: function (resource) {
            Backbone.history.fragment = null;
            this.resource = resource || '';
            this.render();
        },

        render: function () {
            var self = this;
            var obj = {
                resource: this.resource
            }
            template.render(obj, function (err, out) {
                $('#container').html(out);
            });
        },

        getChange: function () {
            var self = this;
            this.resource = $('#i1').val();
            var obj = {
                resource: this.resource
            }
            template.render(obj, function (err, out) {
                $('#container').html(out);
                var _url = "main?" + self.resource;
                window.history.pushState({ "html": '', "pageTitle": '' }, "", _url);
            });
        }

    });

    return MainView;
});
