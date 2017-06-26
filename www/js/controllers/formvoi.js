var app = angular.module('codhab.controllers.formvoi', []);
var db = null;
app.controller('FormVoiCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $http, $cordovaSQLite) {
  console.log('oi')
  // $ionicPlatform.ready(function() {
  //   db = $cordovaSQLite.openDB({name: "extramobile.db", location:"default"});
  //   $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY, firstname text, lastname text)");
  // });
  //
  //
  // $scope.insert = function(firstname, lastname) {
  //         var query = "INSERT INTO pessoas (firstname, lastname) VALUES (?,?)";
  //         $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
  //             console.log("INSERT ID -> " + res.insertId);
  //         }, function (err) {
  //             console.error(err);
  //         });
  //     }

});
