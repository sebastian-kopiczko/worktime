angular.module('workTimeApp', ['workTimeApp'])
    .controller('mainCtrl', function ($scope) {
        $scope.isPushed = true;
        $scope.pushMenu = function ($scope) {
            $scope.isPushed = !$scope.isPushed;
            console.log('ok');
        }
    });