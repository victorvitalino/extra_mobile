angular.module('extramob.controllers.vehicle', []);
 app.controller('VehicleCtrl', function($scope, $ionicConfig, $state, $timeout) {
   $scope.counter = 0;
   $scope.stopped = false;
   $scope.buttonText='Parar';
   $scope.onTimeout = function(){
       $scope.counter++;
       mytimeout = $timeout($scope.onTimeout,1000);
   }
   var mytimeout = $timeout($scope.onTimeout,1000);
   $scope.start = function(){
       if(!$scope.stopped){
           $timeout.cancel(mytimeout);
           $scope.buttonText='Retomar';
       }
       else
       {
           mytimeout = $timeout($scope.onTimeout,1000);
           $scope.buttonText='Parar';
       }
           $scope.stopped=!$scope.stopped;
   }
});

app.filter('formatTimer', function() {
return function(input)
  {
      function z(n) {return (n<10? '0' : '') + n;}
      var seconds = input % 60;
      var minutes = Math.floor(input / 60);
      var hours = Math.floor(minutes / 60);
      return (z(hours) +':'+z(minutes)+':'+z(seconds));
  };
});
