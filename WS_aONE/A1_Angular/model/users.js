    // this controller has to deal with user management.. primarily using user.js and usersService.js 
    console.log("starting users factory ctrl...");
    
app.factory("users", function (User) {
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
})