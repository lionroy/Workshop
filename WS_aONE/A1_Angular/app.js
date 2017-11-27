var app = angular.module('practico', ["ngRoute"]);

app.config(function ($routeProvider) {

  $routeProvider
    // .when("/", {
    //   template: '<strong>index page</strong><br/><p>Index some content here</p>'
    //   // templateUrl: "views/main.html",
    //   // controller: "homeCtrl"
    // })

    .when("/", {
      template: '<strong>default page</strong><br/><p>default content here</p>'
      // templateUrl: "views/main.html",
      // controller: "mainCtrl"
    })

    .when("/users", {
      template: '<strong>users page</strong><br/><p>User content here</p>'
      // templateUrl: "users.html",
      // controller: "usersCtrl"
    })

    .otherwise({
      template: '<strong>default routing page</strong><br/><p>No content here</p>'

      // redirectTo: "/"
    })

});


//     .when("#!/views/tasks.html", {
//       templateUrl: "views/main.html",
//       controller: "mainCtrl"
//     })
//     .when("#!/users", {
//       templateUrl: "views/users.html"
//     })
//     .otherwise({
//        redirectTo: "#!/",
//        controller: "homeCtrl"
//     })

//     // $locationProvider.hashPrefix('');
