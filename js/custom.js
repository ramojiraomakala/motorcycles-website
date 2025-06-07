const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Kawasaki', 'Yamaha', 'Honda', 'Suzuki', 'Harley-Davidson'],
    datasets: [{
      label: 'Units Sold in 2024',
      data: [1200, 950, 1500, 850, 400],
      backgroundColor: 'rgba(54, 162, 235, 0.7)'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});