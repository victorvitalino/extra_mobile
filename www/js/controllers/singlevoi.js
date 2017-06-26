var app = angular.module('codhab.controllers.singlevoi', []);
var db = null;
app.controller('SingleVoiCtrl', function($scope,$ionicPlatform, $stateParams, $ionicConfig, $state, $http, $cordovaSQLite) {

  $ionicPlatform.ready(function() {
    db = $cordovaSQLite.openDB({name: "extramobile.db", location:"default"});
  });
  var query = "SELECT * FROM pessoas WHERE id="+$stateParams.id;
  $cordovaSQLite.execute(db, query).then(function(res) {
      if(res.rows.length > 0) {

          console.log(res.rows.item(0))

      } else {
          console.log("No results found");
      }
    }, function (err) {
      console.error(err);
    });
});
