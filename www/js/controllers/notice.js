angular.module('extramob.controllers.notice', []);
 app.controller('NoticeCtrl', function($scope, $ionicConfig, $state, $sce) {

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.lat = window.localStorage['lat'];
  $scope.lon = window.localStorage['long'];
  $scope.url = "http://www.codhab.df.gov.br/?lat="+$scope.lat+'&lon='+$scope.lon;
console.log($scope.url)
});