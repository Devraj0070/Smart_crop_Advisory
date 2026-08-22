function WeatherCard() {
  return (
    <div className="card">
      <h3>🌦️ Today's Weather</h3>

      <h2>28°C</h2>

      <p>Partly Cloudy</p>

      <div className="weather-info">
        <span>💧 Humidity: 72%</span>
        <span>🌧️ Rain: 20%</span>
      </div>
    </div>
  );
}

export default WeatherCard;