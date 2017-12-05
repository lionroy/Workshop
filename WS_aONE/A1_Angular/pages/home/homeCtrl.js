
// app.controller("homeCtrl", function ($scope) {
//   $scope.test = "Hello Dolly";
//   console.log(test);
//   // hmm...
//   // $scope.data = "data.json";
//   // $scope.user = "";
// });

app.controller("homeCtrl", function($scope, $uibModal) {
  
  $scope.login = function () {
    $uibModal.open({
      templateUrl: "/views/login.html",
      controller: "LoginCtrl"
    })
  }
});

