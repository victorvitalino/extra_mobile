var app = angular.module('codhab.controllers.extranet', []);

app.controller('ExtraCtrl', function ($scope,$ionicPlatform, $ionicConfig, $state,$sce,$filter,$http) {
  $scope.url = $sce.trustAsResourceUrl("http://mobile.codhab.df.gov.br/protocol/conducts?deviceid="+window.localStorage['UserId']+'&pushtoken='+window.localStorage['PushToken']);


});
