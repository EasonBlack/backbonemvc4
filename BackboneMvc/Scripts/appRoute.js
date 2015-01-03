
define(function (require) {
  var Backbone = require('backbone');
  var MainView = require('src/views/main');
  var IndexView = require('src/views/index');
  var Router = Backbone.Router.extend({
  

    initialize: function (opts) {
        this.route(opts.prefix + 'index', 'index');
        this.route(opts.prefix + 'main', 'main');
    },

    index: function () {
      new IndexView();
    },
    
    main: function () {
      new MainView();
    }
  });

  return Router;
});
