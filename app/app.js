var workTimeApp = angular.module('workTimeApp', ['ngRoute']);

workTimeApp.controller('mainCtrl', function ($scope) {
    $scope.isPushed = true;
    $scope.msg = 'ttttt';
    $scope.pushMenu = function ($scope) {
        $scope.isPushed = !$scope.isPushed;
        console.log('ok');
    }
});
workTimeApp.controller('chatbotCtrl', function ($scope) {
    $scope.msg = 'chatbot';
});
workTimeApp.controller('chartsCtrl', function ($scope) {
    $scope.msg = 'charts';
});
workTimeApp.controller('helpCtrl', function ($scope) {
    $scope.msg = 'help';
});

workTimeApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'mainCtrl'
        })
        .when('/chatbot', {
            templateUrl: 'templates/chatbot.html',
            controller: 'chatbotCtrl'
        })
        .when('/charts', {
            templateUrl: 'templates/charts.html',
            controller: 'chartsCtrl'
        })
        .when('/help', {
            templateUrl: 'templates/help.html',
            controller: 'helpCtrl'
        });
});