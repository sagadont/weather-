function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '65a313deb4352f22f2095f5830465800';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=65a313deb4352f22f2095f5830465800&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const windSpeed = data.wind.speed;
            const humidity = data.main.humidity;
            const cityName = data.name;
            const country = data.sys.country;
            const weather = `${cityName}, ${country}: ${description}, ${temperature}°C. Wind Speed: ${windSpeed} m/s. Humidity: ${humidity}%`;
            weatherInfo.textContent = weather;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.textContent = 'Error fetching weather data. Please try again later.';
        });
}
