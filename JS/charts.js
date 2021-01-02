google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartOne);
google.charts.setOnLoadCallback(drawChartTwo);
google.charts.setOnLoadCallback(drawChartThree);
google.charts.setOnLoadCallback(drawChartFour);
google.charts.setOnLoadCallback(drawChartFive);
google.charts.setOnLoadCallback(drawChartSix);
google.charts.setOnLoadCallback(drawChartSeven);

function drawChartOne() {
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Value'],
        ['No', 2],
        ['Yes', 3]
    ]);

    var options = {
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart-one'));
    chart.draw(data, options);
}

function drawChartTwo() {
    var data = google.visualization.arrayToDataTable([
        ["Name", "Value", { role: "style" } ],
        ["Participant 1", 0, "color: #3366cc"],
        ["Participant 2", 2, "color: #3366cc"],
        ["Participant 3", 1, "color: #3366cc"],
        ["Participant 4", 4, "color: #3366cc"]
    ]);

    var options = {
        is3D: true,
        legend: { position: "none" },
    };
    
    var chart = new google.visualization.BarChart(document.getElementById("barchart-one"));
    chart.draw(data, options);
}

function drawChartThree() {
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Value'],
        ["No", 0],
        ['Yes', 4]
    ]);

    var options = {
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart-two'));
    chart.draw(data, options);
}

function drawChartFour() {
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Value'],
        ["No", 0],
        ['Yes', 4]
    ]);

    var options = {
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart-three'));
    chart.draw(data, options);
}

function drawChartFive() {
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Value'],
        ["Maybe", 1],
        ['Yes', 3]
    ]);

    var options = {
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart-four'));
    chart.draw(data, options);
}

function drawChartSix() {
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Value'],
        ["No", 0],
        ['Yes', 4]
    ]);

    var options = {
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart-five'));
    chart.draw(data, options);
}

function drawChartSeven() {
    var data = google.visualization.arrayToDataTable([
        ['Answer', 'Value'],
        ["No", 0],
        ['Yes', 4]
    ]);

    var options = {
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart-six'));
    chart.draw(data, options);
}