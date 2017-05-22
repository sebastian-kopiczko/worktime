var workTimeApp = angular.module('workTimeApp', ['ngRoute']);




workTimeApp.controller('mainCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
    $scope.isPushed = true;
    $scope.FBLogin = function () {

        FB.login(function (response) {
            var loggedIn;
            if (response.status === 'connected') {
                FB.api('/me', function (response) {
                    console.log('Zalogowano pomyślnie użytkownika: ' + response.name);
                });
                var accessToken = FB.getAuthResponse();
                $rootScope.$apply(function () {
                    $location.path("/home");
                });
            } else {
                console.log('Logowanie nie powiodło się.');
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