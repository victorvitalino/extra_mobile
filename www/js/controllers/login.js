var app = angular.module('codhab.controllers.login', []);


/*********************************************************************
 * LoginCtrl
 *********************************************************************/

 app.controller('LoginCtrl',function($scope, $state, $http,$ionicPlatform){
     $scope.formData = {
      "matricula": "",
      "password": ""
      };
    $scope.getData = function () {
      var data = {
        "matricula": $scope.formData.matricula,
        "password": $scope.formData.password
        }
        // console.log($scope.formData.matricula);
        // console.log($scope.formData.password);
        $http.get("http://mobile.codhab.df.gov.br/authenticate/?code="+$scope.formData.matricula+"&password="+$scope.formData.password)
         .success(function (data, status, headers, config){
            console.log(data)
            for (var k in data){
              if (k == 'data'){
                var y = data[k];
                if(y.message == 'success'){
                  window.localStorage['matricula'] = $scope.matricula;
                  window.location.reload();
                  $state.go('tabs.noticias');
                }else{
                  alert("Matricula ou senha erradas.")
                }
              }
            }

         }).error(function(data, status, headers, config){
           alert("Você está sem conexão, ou ela está lenta, tente mais tarde.")
         }).then(function(result){
         });
    }
});
  /*********************************************************************
   * SignupCtrl
   *********************************************************************/
  app.controller('SignupCtrl', function ($scope, $state, AuthService) {

  	$scope.formData = {
  		"name": "",
  		"email": "",
      "cpf":"",
  		"password": ""
  	};

  	$scope.signup = function (form) {
  		if (form.$valid){

  			console.log("SignupCtrl::signup")
  			AuthService.signup($scope.formData.email,
  				$scope.formData.name,
          $scope.formData.cpf,
  				$scope.formData.password)
  		} else {
  			console.log("Invalid")
  		}
  	};
  });
