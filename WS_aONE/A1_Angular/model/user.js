
app.factory("User", function () {

    // user ctor
    function User(username, email, fname, lname) {
        this.username = username;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.selected = "false";
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
    };
    return User;
})

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
