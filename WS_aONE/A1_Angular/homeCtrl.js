
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
      templateUrl: "app/login/login.html",
      controller: "LoginCtrl"
    })
  }
});