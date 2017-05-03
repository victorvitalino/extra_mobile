var app = angular.module('codhab.controllers.tabs', []);
app.controller('TabsCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $cordovaGeolocation, $http) {

  $scope.check = function(){
    if(window.localStorage['matricula'] === undefined || window.localStorage['matricula'] === null || window.localStorage['matricula'] === '' || window.localStorage['matricula'] === ' '){
      return true;
    }else{
      return false;
    }
  }

});
