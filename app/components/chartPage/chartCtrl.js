workTimeApp.controller('chartCtrl', ['$scope', 'ChartService', function ($scope, ChartService) {
    $scope.newChart = function () {
        ChartService.generateChart();
    }
    $scope.today = new Date();
}]);