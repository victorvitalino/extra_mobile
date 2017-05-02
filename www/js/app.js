// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic',
 'extramob.controllers.home',
 'extramob.controllers.notice',
 'codhab.controllers.faq',
 'codhab.controllers.terms',
 'starter.controllers',
 'starter.services'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.qrcode', {
      url: '/qrcode',
      views: {
        'tab-qrcode': {
          templateUrl: 'templates/tab-qrcode.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.notice', {
    url: '/notice',
    views: {
      'tab-notice': {
        templateUrl: 'templates/tab-notice.html',
        controller: 'NoticeCtrl'
      }
    }
  })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  .state('tab.info',{
    url: '/info',
    views: {
      'tab-info': {
        templateUrl: 'templates/tab-info.html',
        controller: ''
      }
    }
  })
  .state('tab.faq',{
    url: '/faq',
    views: {
      'tab-info': {
        templateUrl: 'templates/faq.html',
        controller: 'FaqCtrl'
      }
    }
  })
  .state('tab.terms',{
    url: '/terms',
    views: {
      'tab-info': {
        templateUrl: 'templates/terms.html',
        controller: 'TermsCtrl'
      }
    }
  })

  .state('tab.perfil', {
    url: '/perfil',
    views: {
      'tab-perfil': {
        templateUrl: 'templates/tab-perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
