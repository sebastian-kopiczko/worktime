workTimeApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/start.html',
            controller: 'startCtrl'
        })
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
        })
        .when('/logout', {
            templateUrl: 'templates/logout.html',
            controller: 'logoutCtrl'
        })
        .otherwise({
            redirectTo: 'templates/home.html'
        });
});