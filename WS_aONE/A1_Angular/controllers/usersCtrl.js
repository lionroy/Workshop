
// old code: carApp.controller("TestCtrl", function(Car, cars) {

// // testing a value
// app.value('clientId', 'a12345654321x');
//     // console.log(this.clientId); // undefined

app.controller('userCtrl', ['clientId', function userCtrl(clientId) {
    this.clientId = clientId;
    console.log(this.clientId);

//   }]);
// //   console.log(this.clientId);

//   // testok ?
// // console.log($scope.value.clientId);
//  // console.log($value.clientId);
//    // finished test for value..


// testing the ctrl

//app.controller("usersCtrl", ['$scope', '$rootScope', '$http', '$log', 'usersService', 'User',
  //      function ($scope, $rootScope, $http, $log, usersService, users) {
            console.log("loading users ctrl...");
            console.log("testing users ctrl on usersService...");
            $log.log($rootScope.users);
            $log.log($scope.users);

            $rootScope.users = [];
            $scope.users = {};
            
            // $rootScope.users = usersService.grabAll(); // <<----------this is the key point!
            $log.log($rootScope.users);
        }]);

//$rootSscope.users = usersService().users.grabAll();


// running the ctrl

    // app.controller("usersCtrl", ["scope", "usersService", "users", "log", "routeParams", function ($scope, $usersService, $users, $log, $routeParams) {

    //     $scope.test = "Hello I LOVE You";
    //     console.log($scope.users);
    //     console.log(test);

    //     var user = new User("jo", "em@ail.co", "Josef", "Schmoe");

    //     //   var user = new User({
    //     //     "username": "Donald",
    //     //     "email": "donaldduck@acme.co",
    //     //     "fname": "donald",
    //     //     "lname": "duck",
    //     //     "selected": "false",
    //     //     "id": 123456789,
    //     //     "passport": 888,
    //     //     "role": ["Manager", "Administrator"],
    //     //     "hasRole": "true",
    //     //     "isActive": "false"
    //     // });

    //     console.log($scope.user);
    //     // $scope.user = grabUserById($routeParams.index);

    // }]);