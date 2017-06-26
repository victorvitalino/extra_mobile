var app = angular.module('codhab.controllers.app', []);
app.controller('AppCtrl', function($scope, $ionicConfig, $state, $http, $ionicPlatform, $ionicPopup,$sce,$filter) {
console.log('oi')
$scope.url = $sce.trustAsResourceUrl("http://mobile.codhab.df.gov.br/person");

});
