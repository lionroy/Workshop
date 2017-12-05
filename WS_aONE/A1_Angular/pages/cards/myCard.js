// this controller is the ctor or a single user management.. 
// primarily to be used by userCtrl.js and usersService.js 
//    console.log("starting user ctor...");

app.factory("myCard", function () {
    console.log("starting user ctor...");

    //  console.log(user);
    //  user ctor
    function myCard(author, acronym, text) {

        this.cardId = "456z";
        this.cardAuthor = "Mrs. Mingle";
        this.cardTitle = "woke up this morning...";
        this.cardText = "Bla of the Bla Bla";
        this.cardWords = ["Bla", "Bla", "Bla"];
        this.cardTerms = ["Bla"];
        this.cardAcronym = "BBB";
        this.cardSign = ".";
        this.cardExtraWords = ["of the", "of", "the"];
    }

    // console.log("finished card ctor...");
    return myCard;
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
