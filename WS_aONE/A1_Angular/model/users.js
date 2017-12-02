// this controller has to deal with user management.. primarily using user.js and usersService.js 
// console.log("loading testUsers factory ctrl...");

// app.factory("testUsers", function () {
//     console.log("starting testUsers factory ctrl...");
//     var users = [];

//     $scope.users = this.users;


// });



app.factory("users", function (user) {
    console.log("starting users factory ctrl...");
    var users = [];

    function grabAll() {
        return users;
    }

    function grabUserById(index) {
        return users[index];
    }

    function addUser(user) {
        users.push(user);
    }

    // function remUser(user){
    //     users.pop(user); 
    // }

    function setUsers(userCommon) {
        users = [];
        for (var i = 0; i < userCommon.length; i++) {

            users.push(new User(userCommon[i].username, userCommon[i].email,
                userCommon[i].fname, userCommon[i].lname,
                userCommon[i].selected, userCommon[i].passport,
                userCommon[i].role, userCommon[i].hasRole,
                userCommon[i].isActive))
        }
    }
    // users manager functionallity
    return {
        grabAll: grabAll,
        grabUserById: grabUserById,
        addUser: addUser,
        remUser: remUser,
        setUsers: setUsers
    }
});

// usersService.users.grabAll();