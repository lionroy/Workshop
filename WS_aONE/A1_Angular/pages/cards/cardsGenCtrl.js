
app.controller('cardsGenCtrl', ['$scope', '$rootScope', '$log', '$http', 'myCard',
    function cardsGenCtrl($scope, $rootScope, $log, $http, myCard) {

        // tsts
        $scope.test = "testing..."
        $log.log($scope.test);

        $scope.newCard = "";
        $scope.newCard.test = "tester..";
        $log.log($scope.newCard);
        
        $scope.newCard = new myCard("author", "acronym","test text","'.'");
        $log.log($scope.newCard);
        $log.log($scope.test);
        
    }]);

    // ref codes..
    // card fields reset 
    // $scope.cardId = "";              // e.g. 123x
    // $scope.cardAuthor = "";          // e.g. mrs. mingle
    // $scope.cardTitle = "";           // e.g. "woke up this morning..."
    // $scope.cardText = "";            // e.g. "Bla of the Bla Bla"
    // $scope.cardWords = [];           // e.g. ["Bla", "Bla", "Bla"]
    // $scope.cardTerms = [];           // e.g. ["Bla"]
    // $scope.cardAcronym = "";         // e.g. "BBB"
    // $scope.cardSign = "";            // e.g. "" / default = "."
    // $scope.cardExtraWords = "";      // e.g. ["of","the"]
