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
            date: '',
            done: false,
            notified: 'No'
        };

        $scope.saveBand = function() {

            $scope.bands.$add($scope.newBand).then(function(newChildRef) {

            });

            $scope.newBand = {
                name: '',
                phone: '',
                date: '',
                done: false,
                notified: 'No'
            };
        };

        $scope.sendText = function(band) {
            var msgRef = new Firebase("https://band-space.firebaseio.com/textMessages");
            var msgsFirebase = $firebase(msgRef);
            var msgs = msgsFirebase.$asArray();
            var newMsg = {
                name: band.name,
                phoneNumber: band.phone,
                date: band.date
            };

            msgs.$add(newMsg);
            band.notified = 'Yes';

            $scope.bands.$save(band);

        };

    }]);
