
async function showWeather() {

    a = placeName.value
    placeName.value = ""

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + a;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5257c64f53msh0ff0f658b1d277dp135f25jsn4835d95189b4',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        cityName.innerHTML = a

        temp.innerHTML = "Temperature : " + result.temp + " degree C"
        hum.innerHTML = "Humidity : " + result.humidity + " %"
        feels.innerHTML = "Feels Like : " + result.feels_like + " degree C"
    } catch (error) {
        console.error(error);
    }
}