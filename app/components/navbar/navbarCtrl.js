workTimeApp.controller('navbarCtrl', ['$scope', 'LogoutService', function ($scope, LogoutService) {
    $scope.fbLogout = function () {
        LogoutService.logout();
        LogoutService.changeView('/')
    };
}]);