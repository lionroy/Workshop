// test service 
  console.log("testing the user service...");

app.controller("testService", "scope", function ($testService, $scope, User, users) {
  console.log("started user service...");

  $scope.test = 'this is not a test';
  console.log($scope.test);
}),

  // user ctrl code 
  console.log("loading user service...");

app.service("usersService", ["scope", "http", "User", "users", function ($scope, $http, $User, $users) {

  console.log("starting user service...");
  $scope.users = [];

  alert("starting user service..." + $scope.users);

  $http.get("data/userbase.json").then(function mySuccess(response) {
    for (var i = 0; i < response.data.length; i++) {
      $scope.users.push(new User(response.data[i].username, response.data[i].email,
        response.data[i].fname, response.data[i].lname,
        // response.data[i].selected, response.data[i].id, response.data[i].passport,
        // response.data[i].role, response.data[i].hasRole, response.data[i].isActive
      ))
    }
    alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  });
  // return {
  //   scope : scope,
  //   http : http,
  //   users : users

  // }
}]);