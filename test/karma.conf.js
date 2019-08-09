// Karma configuration
// Generated on 2015-07-10 using
// generator-karma 0.9.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    preprocessors: {
      'public/templates/directives/*.html': ['ng-html2js']
    },

    browserNoActivityTimeout: 60000,

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'public/scripts/vendor/mapsGoogleApis.js',
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/firebase/firebase.js',
      'bower_components/angularfire/dist/angularfire.js',
      'bower_components/ng-ckeditor/ng-ckeditor.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-social/angular-social.js',
      'bower_components/youtube-iframe-api/youtube.iframe-api.js',
      'bower_components/angular-youtube-embed/src/angular-youtube-embed.js',
      'bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
      'bower_components/lodash/lodash.js',
      'bower_components/markerclustererplus/src/markerclusterer.js',
      'bower_components/google-maps-utility-library-v3-markerwithlabel/dist/markerwithlabel.js',
      'bower_components/google-maps-utility-library-v3-infobox/dist/infobox.js',
      'bower_components/google-maps-utility-library-v3-keydragzoom/dist/keydragzoom.js',
      'bower_components/js-rich-marker/src/richmarker.js',
      'bower_components/angular-google-maps/dist/angular-google-maps.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/karma-read-json/karma-read-json.js',
      // endbower
      'public/scripts/appRoot.js',
      'public/data/*.js',
      'public/scripts/ckeditor/*.js',
      'public/scripts/services/*.js',
      'public/scripts/directives/*.js',
      'public/scripts/controllers/*.js',
      'public/scripts/controllers/**/*.js',
      'public/scripts/vendor/*.js',
      //special mock services
      //'test/service/ngMockHttp.js',
      //'test/mock/**/*.js',
      'test/spec/**/*.js',
    //  load templates for testing
      'public/templates/directives/*.html',
      'public/templates/vendor/**/*.html',
      {pattern: 'test/mock/*.json', watched: true, served: true, included: false}
    ],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'public/',
      //prependPrefix: 'public/',
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('templates')
      moduleName: 'templates'
    },

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    //port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
