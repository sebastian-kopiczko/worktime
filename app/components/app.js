var workTimeApp = angular.module('workTimeApp', ['ngRoute']);
workTimeApp.controller('appCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
        $scope.fbLogin = function () {
            LoginService.login();
            LoginService.changeView('home')
        };

        console.log('appCtrl ok');
        $scope.isPushed = true;
        alert('mainctrl ok');
    }])
    .component('navbar', {
        templateUrl: '../../templates/navbar.html',
        controller: function navbarCtrl() {
            $scope.alert('newctrl ok');
        }
    })