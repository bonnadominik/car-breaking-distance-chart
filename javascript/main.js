let velocitys = [10, 30, 50, 70, 90, 110, 130, 150];

let CalculateBreakingDistanceOnDry = (arrayOfVelocitys) => {
    var breakingDistancesOnDry = [];
    velocitys.forEach(element => {
        breakingDistancesOnDry.push(((element*(1000/3600))**2)/(2*7)); //I assumed that the acceleration is 7m/s
    });
    return breakingDistancesOnDry;
}

let CalculateBreakingDistanceOnWet = (arrayOfVelocitys) => {
    var breakingDistancesOnWet = [];
    velocitys.forEach(element => {
        breakingDistancesOnWet.push(((element*(1000/3600))**2)/(2*5)); //I assumed that the acceleration is 5m/s
    });
    return breakingDistancesOnWet; 
}


let chart = document.getElementById('breaking-distance-chart').getContext('2d');

// Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;

let breakingDistanceChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: velocitys,
        datasets:[{
            label: 'Droga hamowania samochodu na suchej nawierzchni',
            data: CalculateBreakingDistanceOnDry(velocitys),
            borderWidth: 2,
            borderColor: '#1a1b4b',
            backgroundColor: '#1a1b4b',
            pointHoverRadius: 8,
            hoverBorderWidth: 3,
            fill: 'none'
        },{
            label: 'Droga hamowania samochodu na mokrej nawierzchni',
            data: CalculateBreakingDistanceOnWet(velocitys),
            borderWidth: 2,
            borderColor: '#f7a400',
            backgroundColor: '#f7a400',
            pointHoverRadius: 8,
            hoverBorderWidth: 3,
            fill: 'none'
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Wykres drogi hamowania samochodu na suchej i mokrej nawierzchni',
        },
        legend:{
            position: 'bottom',
            labels: {
                fontSize: 16
            }
        },
        layout: {
            padding: {
                left: 20,
                right: 20
            }
        },
    }
});

