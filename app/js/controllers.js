'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('LandingPageController', [function() {

    }])
    .controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
        var bandsRef  = new Firebase("https://band-space.firebaseio.com/");

        $scope.bands = $firebase(bandsRef);

        $scope.band = {
            name: '',
            phone: '',
            date: ''
        };

        $scope.saveBand = function() {

            $scope.bands.$push( $scope.band ).then(function(newChildRef) {
              console.log("added record with id " + newChildRef.name());
            });

            $scope.band = {
                name: '',
                phone: '',
                date: ''
            };
        };

    }]);
