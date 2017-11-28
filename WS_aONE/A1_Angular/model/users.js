
app.factory("users", function (User) {
    var users = [];

    function grabAll() {
        return cars;
    }

    function grabUserById(index) {
        return cars[index];
    }

    function addUser(user) {
        cars.push(user);
    }

    // function remUser(user){
    //     cars.pop(user); 
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