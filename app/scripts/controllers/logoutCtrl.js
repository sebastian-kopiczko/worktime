workTimeApp.controller('startCtrl', ['$scope', '$rootScope', '$location', function ($scope, $window, $location, $rootScope) {
    $scope.FBLogout = function () {
        FB.logout(function (response) {
            console.log('Person is now logged out' + localStorage);
            $rootScope.$apply(function () {
                $location.path("/");
            });
        });
    }
}]);