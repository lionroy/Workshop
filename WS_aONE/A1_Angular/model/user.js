    // this controller is the ctor or a single user management.. 
    // primarily to be used by userCtrl.js and usersService.js 
//    console.log("starting user ctor...");

app.factory("User", function (){
    console.log("starting user ctor...");
    
    //  console.log(user);
    //  user ctor
    function User(username, email, fname, lname) {
        this.username = username;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        // this.selected = "false";
        // this.myName = this.fname + ' ' + this.lname;
        // this.onBoardTicket = function () {
        //     var onBoardingTime = new Date();
        //     }
        //     return onBoardingTime;

        // this.passport = 888;
        // this.guid = newGuid(); // verification
        // this.id  =  newCitizen(); // stamping user on-boarding

        // this.role = ["Manager", "Administrator"];
        // this.hasRole = true;
        // this.yearOfBirth = 2000; // TODO date+age ctrl
        // this.isActive = false;
        // this.activityMeters; // etc.
        
        // console.log("finished user ctor...");
    }

    return User;
});

// field-set 
// username = username;
// email = email;
// fname = fname;
// lname = lname;
// selected = false;
// id = 222333777
// passport = 888;
// role = ["Manager", "Administrator"];
// hasRole = true;
// isActive = false;
