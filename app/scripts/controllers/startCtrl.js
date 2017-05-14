workTimeApp.controller('startCtrl', ['$scope', function ($scope) {
    $scope.name = 'facebook login';
    $scope.FBLogin = function () {
        FB.login(function (response) {
            if (response.status === 'connected') {
                console.log('Logged into your app and Facebook.');
                FB.api('/me', function (response) {
                    console.log('Successful login for: ' + response.name);
                    console.log('Thanks for logging in, ' + response.name + '!');
                });
                var accessToken = FB.getAuthResponse();
                console.log(accessToken);
            } else {
                console.log('The person is not logged into this app or we are unable to tell. ');
            }
        });

    }
    $scope.FBLogout = function () {
        FB.logout(function (response) {
            console.log('Person is now logged out');
        });
    }
}]);