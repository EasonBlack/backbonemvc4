/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-5
 * Time: 下午4:33
 * To change this template use File | Settings | File Templates.
 */
define(function (require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Router = require('appRoute');


    var roots = window.location.pathname.substring(1).split('/');
    var prefix = roots[0] + '/';
    
    var router = new Router({prefix: prefix});

    Backbone.history.start({ pushState: true });

});
