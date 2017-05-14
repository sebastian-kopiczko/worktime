var workTimeApp = angular.module('workTimeApp', ['ngRoute']);




workTimeApp.controller('mainCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
    $scope.isPushed = true;
    $scope.FBLogin = function () {

        FB.login(function (response) {
            var loggedIn;

            if (response.status === 'connected') {
                console.log('Logged into your app and Facebook.');
                FB.api('/me', function (response) {
                    console.log(response);
                    console.log('Successful login for: ' + response.name);
                    console.log('Thanks for logging in, ' + response.name + '!');
                });
                var accessToken = FB.getAuthResponse();
                console.log(accessToken);
                $rootScope.$apply(function () {
                    $location.path("/home");
                });
                console.log($location);
            } else {
                console.log('The person is not logged into this app or we are unable to tell. ');
            }
        });

    }
    $scope.FBLogout = function () {
        FB.logout(function (response) {
            console.log('Person is now logged out' + localStorage);
            $rootScope.$apply(function () {
                $location.path("/");
            });
        });
    }
}]);

workTimeApp.controller('chatbotCtrl', function ($scope) {
    $scope.msg = 'chatbot';
});
workTimeApp.controller('chartsCtrl', function ($scope) {
    $scope.msg = 'charts';
});
workTimeApp.controller('helpCtrl', function ($scope) {
    $scope.msg = 'help';
});