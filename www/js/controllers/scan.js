var app = angular.module('codhab.controllers.scan', []);

app.controller('ScanCtrl', function ($scope,$cordovaBarcodeScanner,$cordovaInAppBrowser,$http) {


  $scope.scanBarcode = function() {

    cordova.plugins.barcodeScanner.scan(
         function (result) {

            $scope.mat = result.text;
            // window.localStorage['matricula'] = result.text;
            $http.get("http://mobile.codhab.df.gov.br/authenticate/?code="+$scope.mat)
             .success(function (data, status, headers, config){
                console.log(data)
                for (var k in data){
                  if (k == 'data'){
                    var y = data[k];
                    if(y.message == 'success'){
                      window.localStorage['matricula'] = $scope.mat;
                      window.location.reload();
                      $state.go('tabs.noticias');
                    }else{
                      alert("QRcode Inválido.")
                    }
                  }
                }

             }).error(function(data, status, headers, config){
               alert("Você está sem conexão, ou ela está lenta, tente mais tarde.")
             }).then(function(result){
             });
         },
         function (error) {
             alert("Scanning failed: " + error);
         },
         {
             showFlipCameraButton : true, // iOS and Android
             showTorchButton : true, // iOS and Android
             prompt : "Posicione o corretamente o leitor no QRcode", // Android
             formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
         }
      );

    };
});
