
app.controller("homeCtrl1", function($scope, $location) {
    $scope.test = "Hello Dolly" + $location.toString();
  });