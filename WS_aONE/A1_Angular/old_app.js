var app = angular.module('practico', ["ngRoute"]);

app.config(function ($routeProvider) {

  $routeProvider
    // .when("/", {
    //   template: '<strong>index page</strong><br/><p>Index some content here</p>'
    //   // templateUrl: "views/main.html",
    //   // controller: "homeCtrl"
    // })

    .when("/", {
      // template: '<strong>default page</strong><br/><p>default content here</p>'
      templateUrl: "views/main.html",
      controller: "mainCtrl"
    })

    .when("/users", {
      // template: '<strong>users page</strong><br/><p>User content here</p>'
      templateUrl: "views/users.html",
      controller: "usersCtrl"
    })

    .otherwise({
      template: '<strong>default 404 routing page</strong><br/><p>No content here</p>'

      // redirectTo: "/"
    })

});

//   testing ctrls
//   app.controller("testCtrl", ["testCtrl", function(User, users) {
//   var users = [];
//   var user = new User("test", "test@test.co", "ftest", "ltest");


//     // "username" = "username",
//     //   "email" = "email@go.co",
//     //   "fname" = "fname",
//     //   "lname" = "lname",

// //       "selected" = false,
// //      "id" = 222333777,
// //       "passport" = 888,
// //       "role" = ["Manager", "Administrator"],
// //       "hasRole" = true,
// //       "isActive" = false,

//     users.push(user);
//       alert(user);
//   }]);
//   console.log(user);
