/**
 * Created by JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-5
 * Time: 下午3:55
 * To change this template use File | Settings | File Templates.
 */
require.config({
    paths: {
        'jquery': './vendor/jquery-1.7.1',
        'backbone': './vendor/backbone-min',
        'dust': './vendor/dust-full-2.0.3',
        'underscore': './vendor/lodash.min',
        'rdust': './vendor/require-dust'
    },

    shim: {
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },

        'dust': {
            'exports': 'dust'
        }
    },
    // kickstart the app
    deps: ['appStart']
});
