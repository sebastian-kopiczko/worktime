var workTimeApp = angular.module('workTimeApp', ['ngRoute']);

window.fbAsyncInit = function () {
    FB.init({
        appId: '1707530042880474',
        xfbml: true,
        cookie: true,
        version: 'v2.9'
    });
    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



workTimeApp.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.isPushed = true;
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