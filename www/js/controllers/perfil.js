angular.module('extramob.controllers.perfil', []);
 app.controller('PerfilCtrl', function($scope, $ionicConfig, $state, $sce) {

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.lat = window.localStorage['lat'];
  $scope.lon = window.localStorage['long'];
  $scope.url = "http://extranet.codhab.df.gov.br/perfil/perfil/1655?lat="+$scope.lat+'&lon='+$scope.lon;
console.log($scope.url)
});
