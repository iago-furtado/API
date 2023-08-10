const apiKey = '5a6ec4869e2b9d45947ebf5f3a8066fe';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data based on city name
function fetchWeatherData(cityName) {
    const params = {
        q: cityName,
        appid: apiKey,
        units: 'metric'
    };

    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${apiUrl}?${queryString}`;

    fetch(fullUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `City: ${data.name}<br>
                                 Temperature: ${data.main.temp}°C<br>
                                 Weather: ${data.weather[0].description}`;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weather-info').innerHTML = 'Error fetching weather data';
        });
}

// Attach click event to search button
document.getElementById('search-button').addEventListener('click', function() {
    const cityInput = document.getElementById('city-input').value;
    if (cityInput) {
        fetchWeatherData(cityInput);
    }
});