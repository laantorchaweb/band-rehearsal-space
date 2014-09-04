'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('LandingPageController', [function() {

    }])
    .controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
        var ref = new Firebase("https://band-space.firebaseio.com/bands");
        var sync = $firebase(ref);
        $scope.bands = sync.$asArray();

        $scope.newBand = {
            name: '',
            phone: '',
            date: ''
        };

        $scope.saveBand = function() {

            $scope.bands.$add($scope.newBand).then(function(newChildRef) {

            });

            $scope.newBand = {
                name: '',
                phone: '',
                date: ''
            };
        };

        $scope.sendText = function(phoneNumber) {
            var msgRef = new Firebase("https://band-space.firebaseio.com/textMessages");
            var msgsFirebase = $firebase(msgRef);
            var msgs = msgsFirebase.$asArray();

            msgs.$add({ phoneNumber: phoneNumber });

        };

    }]);
