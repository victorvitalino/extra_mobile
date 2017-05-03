// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('codhab', ['ionic',
'ngCordova',
'ngMessages',
'ngCpfCnpj',
'ui.mask',
'angularMoment',
'codhab.controllers.app',
'codhab.controllers.noticias',
'codhab.controllers.scan',
'codhab.controllers.tabs',
'codhab.controllers.faq',
'codhab.controllers.terms'
])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
    }
    window.addEventListener('native.keyboardshow', function(){
      document.body.classList.add('keyboard-open');
    });

    if(angular.element(document.querySelector("body")).hasClass("keyboard-open")) {
      angular.element(document.querySelector("div.tab-nav.tabs").remove());
    }

    /*OneSignal*/

    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    // Alert to debug
    var notificationOpenedCallback = function(jsonData) {
      // alert("Notification opened:\n" + JSON.stringify(jsonData));
      // console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    // TODO: Update with your OneSignal AppId before running.
    window.plugins.OneSignal
      .startInit("f8691fb0-e0c9-4d6a-b927-c795b65727c5")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
      /*END OneSignal*/

      window.plugins.OneSignal.getIds(function(ids) {
        window.localStorage['UserId'] = ids.userId;
        console.log("UserId: " + ids.userId);
        window.localStorage['PushToken'] = ids.pushToken;
        console.log("oi"+ window.localStorage['PushToken']);
        console.log("oi"+ window.localStorage['UserId']);
        console.log('getIds: ' + JSON.stringify(ids));
    });
  });
});

app.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
$ionicConfigProvider.tabs.position('bottom');
$ionicConfigProvider.navBar.alignTitle('center');
$ionicConfigProvider.backButton.text('');
	$stateProvider
		.state('tabs', {
			url: "/app",
      abstract: true,
			templateUrl: "views/app/tabs.html",
      controller: 'TabsCtrl'
		})
    .state('tabs.home', {
      url: "/home",
      views:{
        'tabs-home':{
          templateUrl: "views/app/home.html",
          controller: 'AppCtrl'
        }
      }
    })
    .state('tabs.info', {
      url: "/info",
      views:{
        'tabs-info':{
          templateUrl: "views/app/info.html",
          controller: 'AppCtrl'
        }
      }
    })

    .state('tabs.terms',{
          url: "/terms",
          views:{
            'tabs-info':{
              templateUrl: "views/app/terms.html",
              controller: 'TermsCtrl'
            }
          }
        })
    .state('tabs.faq',{
          url: "/faq",
          views:{
            'tabs-info':{
              templateUrl: "views/app/faq.html",
              controller: 'FaqCtrl'
            }
          }
        })
    .state('tabs.noticias',{
      url: "/noticias",
      views:{
        'tabs-noticias':{
        templateUrl: "views/app/noticias/index.html",
        controller: 'NoticiasCtrl'
        }
      }
    })
    .state('tabs.noticia',{
      url: "/noticia/:id",
      views:{
        'tabs-noticias':{
        templateUrl: "views/app/noticias/single.html",
        controller: 'NoticiaCtrl'
        }
      }
    })
    .state('tabs.scan',{
      url: "/scan",
      views:{
        'tabs-scan':{
          templateUrl: "views/app/scan/index.html",
          controller: 'ScanCtrl'
        }
      }
    })



   // $ionicConfigProvider.tabs.position('bottom')
	// if none of the above states are matched, use this as the fallback

	   $urlRouterProvider.otherwise('/app/home');

});
