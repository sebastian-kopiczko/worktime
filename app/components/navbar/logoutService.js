workTimeApp.service('LogoutService', ['$window', function ($window) {
    this.logout = function () {
        var accessToken = FB.getAuthResponse();
        return FB.logout(function (response) {
            console.log('Uzytkownik został wylogowany' + localStorage);
        });
    }
    this.changeView = function (view) {
        $window.location.href = '#/' + view;
    }
}])