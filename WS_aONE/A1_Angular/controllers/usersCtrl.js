    
    // old code: carApp.controller("TestCtrl", function(Car, cars) {
    
    // testing the ctrl
    app.controller("testUser", function($scope, User, users) {
        console.log(" testing users ctrl on usersService...");
        console.log($scope.users);
    }),

app.controller("usersCtrl", ["scope", "usersService", "users", "log", "routeParams", function($scope, $usersService, $users, $log, $routeParams) {
    
    $scope.test = "Hello I LOVE You";
    console.log($scope.users);
    console.log(test);

    var user = new User ("jo", "em@ail.co", "Josef", "Schmoe");
    //   var user = new User({
    //     "username": "Donald",
    //     "email": "donaldduck@acme.co",
    //     "fname": "donald",
    //     "lname": "duck",
    //     "selected": "false",
    //     "id": 123456789,
    //     "passport": 888,
    //     "role": ["Manager", "Administrator"],
    //     "hasRole": "true",
    //     "isActive": "false"
    // });

      console.log($scope.user);
  // $scope.user = grabUserById($routeParams.index);

  }]);