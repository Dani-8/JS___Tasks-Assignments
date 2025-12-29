let tChart = null;
let rChart = null;

export function updateCharts(forecastData) {
    const hourly = forecastData.list.slice(0, 8);
    const labels = hourly.map(item => new Date(item.dt * 1000).getHours() + ":00");

    if (tChart) tChart.destroy();
    tChart = new Chart(document.getElementById('tempChart'), {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Temp',
                data: hourly.map(i => Math.round(i.main.temp)),
                borderColor: '#38bdf8',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 2,
                pointBackgroundColor: '#38bdf8',
                fill: true,
                backgroundColor: 'rgba(56, 189, 248, 0.05)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#475569', font: { size: 7 } }, grid: { display: false } },
                y: { display: false }
            }
        }
    });

    if (rChart) rChart.destroy();
    rChart = new Chart(document.getElementById('rainChart'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Precipitation',
                data: hourly.map(i => Math.round((i.pop || 0) * 100)),
                backgroundColor: 'rgba(96, 165, 250, 0.4)',
                hoverBackgroundColor: 'rgba(96, 165, 250, 0.8)',
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    callbacks: { label: ctx => `${ctx.parsed.y}% Chance` }
                }
            },
            scales: {
                x: { ticks: { color: '#475569', font: { size: 7 } }, grid: { display: false } },
                y: { display: false, min: 0, max: 100 }
            }
        }
    });
}