
 // user ctrl code 
app.service("usersService", ["scope", "http", "log", "User", "users", function($scope, $http, $log, $User, $users) {
    
    $scope.users = [];
  
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
    })  
}]);