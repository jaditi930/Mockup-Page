var myContext = document.getElementById( 
    "stackedChartID").getContext('2d'); 
var myChart = new Chart(myContext, { 
    type: 'bar', 
    data: { 
        labels: [20,22,25,27,30,32,35,37,40,50,60,65], 
        datasets: [{ 
            label: 'Employer', 
            backgroundColor: "blue", 
            data: [17, 16, 4, 11, 8, 9], 
        }, { 
            label: 'Employee', 
            backgroundColor: "purple", 
            data: [14, 2, 10, 6, 12, 16], 
        }, { 
            label: 'Total Interest', 
            backgroundColor: "skyblue", 
            data: [2, 21, 13, 3, 24, 7], 
        }], 
    }, 
    options: { 
        plugins: { 
            title: { 
                display: true, 
                text: 'Stacked Bar chart for pollution status' 
            }, 
        }, 
        scales: { 
            x: { 
                stacked: true, 
            }, 
            y: { 
                stacked: true 
            } 
        } 
    } 
}); 