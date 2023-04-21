const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Number of Tourists',
        data: [100, 120, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        // borderColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 262, 235, 1)',
        borderWidth: 1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


// donut chart
const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Number of Tourists',
        data: [100, 120, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#E7E9ED',
            '#8B0000',
            '#FFA07A',
            '#8B008B',
            '#00008B',
            '#228B22',
            '#FFD700',
            '#1E90FF',
            '#FF00FF'
        ]
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data2) {
                    var label = data2.labels[tooltipItem.index];
                    var value = data2.datasets[0].data[tooltipItem.index];
                    return label + ': ' + value;
                }
            }
        }
    }
};

const myChart2 = new Chart(
    document.getElementById('mydonutChart'),
    config2
);
