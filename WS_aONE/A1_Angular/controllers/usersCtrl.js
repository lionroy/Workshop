
app.controller('usersCtrl', ['$scope', '$rootScope', '$log', '$http', 'users', function userCtrl($scope, $rootScope, $log, $http, users) {


    if (users.wasLoaded()) {
        $scope.users = users.grabAll();
    } 
    else {
        $scope.users = [];
        $http.get("/Data/userbase.json").then(function mySuccess(response) {
            users.setUsers(response.data);
            $scope.users = users.grabAll();
            //alert("success" + JSON.stringify(response.status));
        }, function myError(response) {
            alert("error db" + JSON.stringify(response.status));
        })
    }

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