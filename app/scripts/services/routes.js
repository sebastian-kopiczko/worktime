workTimeApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../../components/startPage/startPage.html'
        })
        .when('/home', {
            templateUrl: '../../components/homePage/homePage.html'
        })
        .when('/chat', {
            templateUrl: '../../components/chatPage/chatPage.html'
        })
        .when('/charts', {
            templateUrl: '../../components/chartPage/chartPage.html'
        })
        .when('/help', {
            templateUrl: '../../components/helpPage/helpPage.html'
        })
        .otherwise({
            redirectTo: '../../components/startPage/startPage.html'
        });
});
