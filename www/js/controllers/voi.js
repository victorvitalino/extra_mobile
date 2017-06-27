var app = angular.module('codhab.controllers.voi', []);
var db = null;
app.controller('VoiCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $http, $cordovaSQLite) {

  $ionicPlatform.ready(function() {
    db = $cordovaSQLite.openDB({name: "extramobile.db", location:"default"});
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY, firstname text, lastname text)");
  });


  $scope.insert = function(firstname, lastname) {
          var query = "INSERT INTO pessoas (firstname, lastname) VALUES (?,?)";
          $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
              console.log("INSERT ID -> " + res.insertId);
          }, function (err) {
              console.error(err);
          });
      }


  $scope.doRefresh = function() {
    var query = "SELECT * FROM pessoas";
    $cordovaSQLite.execute(db, query).then(function(res) {
        if(res.rows.length > 0) {
            $scope.all = []; /*Necessário inicializar o scopo, senão ele não consegue fazer o push em um scopo ainda não definido.*/
            for(var i=0; i <= res.rows.length; i++){
              $scope.all.push({
                id: res.rows.item(i).id,
                firstname: res.rows.item(i).firstname,
                lastname: res.rows.item(i).lastname
              });
            }
        } else {
            console.log("No results found");
        }
    }, function (err) {
        console.error(err);
    });

    $scope.$broadcast('scroll.refreshComplete');
  }

    var query = "SELECT * FROM pessoas";
    $cordovaSQLite.execute(db, query).then(function(res) {
        if(res.rows.length > 0) {
            $scope.all = []; /*Necessário inicializar o scopo, senão ele não consegue fazer o push em um scopo ainda não definido.*/
            for(var i=0; i <= res.rows.length; i++){
              $scope.all.push({
                id: res.rows.item(i).id,
                firstname: res.rows.item(i).firstname,
                lastname: res.rows.item(i).lastname
              });
            }


        } else {
            console.log("No results found");
        }
    }, function (err) {
        console.error(err);
        });

});
