workTimeApp.service('ChartService', ['$window', function ($window) {
    this.generateChart = function () {
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {
            'packages': ['corechart']
        });

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Zadanie');
            data.addColumn('number', 'Minuty');
            var chartData = [
                ['Przerwa', 60],
                ['Telefony do klietnów', 230],
                ['Tworzenie raportów', 150],
                ['Spotkanie z szefem', 40]
            ];
            data.addRows(chartData);

            // Set chart options
            var options = {
                'backgroundColor': 'transparent',
                legend: {
                    maxLines: 2,
                    alignment: 'start',
                    position: 'top',
                    textStyle: {
                        color: "#fff"
                    }
                },
                'is3D': true,
                'width': '100%',
                'height': 500,
                colors: ['#fdc23e', '#f9a11b', '#274555', '#ff7761'],
                chartArea: {
                    width: "78%",
                    height: "70%"
                }

            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    }

}])