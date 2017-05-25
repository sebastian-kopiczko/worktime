var workTimeApp = angular.module('workTimeApp', ['ngRoute']);
workTimeApp.controller('appCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
    console.log('appCtrl ok');
    $scope.isPushed = true;
}])