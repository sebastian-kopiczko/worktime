workTimeApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../components/startPage/startPage.html',
            controller: 'startCtrl'
        })
        .when('/home', {
            templateUrl: '../../components/homePage/homePage.html',
            controller: 'homeCtrl'
        })
        .when('/chat', {
            templateUrl: '../../components/homePage/chatPage.html',
            controller: 'chatbotCtrl'
        })
        .when('/charts', {
            templateUrl: '../../components / homePage / homePage.html',
            controller: 'chartsCtrl'
        })
        .when('/help', {
            templateUrl: '../../components/homePage/homePage.html',
            controller: 'helpCtrl'
        })
        .when('/logout', {
            templateUrl: '../../components/homePage/homePage.html',
            controller: 'logoutCtrl'
        })
        .otherwise({
            redirectTo: '../../components/startPage/startPage.html'
        });
});