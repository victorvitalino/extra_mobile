var app = angular.module('codhab.controllers.extranet', []);

app.controller('ExtraCtrl', function ($scope,$ionicPlatform, $ionicConfig, $state,$sce,$filter,$http, $cordovaGeolocation) {
  $scope.url = $sce.trustAsResourceUrl("http://mobile.codhab.df.gov.br/protocol/conducts?deviceid="+window.localStorage['UserId']+'&pushtoken='+window.localStorage['PushToken']);
  /** Inicio da antiga geolocalização **/
   $cordovaGeolocation.getCurrentPosition({timeout:30000, maximumAge:3000, enableHighAccuracy:false})
   .then(function(position){
    $scope.lat = position.coords.latitude;
    $scope.long = position.coords.longitude;
    window.localStorage['lat'] = $scope.lat;
    window.localStorage['long'] = $scope.long;
    console.log($scope.lat);
    console.log($scope.long);
  }, function (err){

  });

});
