workTimeApp.controller('startCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
    $scope.fbLogin = function () {
        LoginService.login();
        LoginService.changeView('home')
    };

}]);