

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06d234cc7amsh7da90b39e7bd0d3p18435djsn34dfa39c713c',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};8


return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err));



  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData('data')
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData)
  consoleä.log(weatherData.main.temp)
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max

}

