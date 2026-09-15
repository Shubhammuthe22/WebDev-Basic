document.addEventListener("DOMContentLoaded",() =>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "dd1f31c5879f0d5b25ed1473b123b529"; //env variable

    getWeatherBtn.addEventListener('click', async () =>{
        const city = cityInput.value.trim();
        if(!city) return;

        // making a web request:-
        // Most Imp:-1.It can throw error
        //          2.server/database is always in another continent.

        try {
            const weatherdata =  await fetchData(city);
            displayData(weatherdata);
        } 
        
        catch (error) {
            showError();
        }
    });

    async function fetchData(city){
        // Functions are Atomic(i.e.used to perform mostly single task)
        // Here fetchData is used to only fetch data and not display data.
        //gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        console.log(typeof response);
        console.log (response);

        if(!response.ok){
            throw new Error("Cannot find City");
            
        }
        
        const data = await response.json();
        return data;
    }

    function displayData(data){
        //shows the data
        console.log(data);
        
        const {name , main , weather} = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Tempertaure: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;


        //unlocks the display i.e weatherInfo
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError (){
        weatherInfo.classList.add("hidden");
        // If the weather info is shown,dont apply the hidden class on error-msg;
        errorMessage.classList.remove("hidden")
    }

});