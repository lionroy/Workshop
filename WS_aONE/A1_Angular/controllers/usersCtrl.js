    //carApp.controller("TestCtrl", function(Car, cars) {

app.controller("usersCtrl", ["usersService", "users", "log", "routeParams", function($usersService, $users, $log, $routeParams) {
    $scope.test = "Hello I LOVE You";
    
      var user = new User({
        "username": "Donald",
        "email": "donaldduck@acme.co",
        "fname": "donald",
        "lname": "duck",
        "selected": "false",
        "id": 123456789,
        "passport": 888,
        "role": ["Manager", "Administrator"],
        "hasRole": "true",
        "isActive": "false"
    });
      console.log(user);
  // $scope.user = grabUserById($routeParams.index);

  }]);