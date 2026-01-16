const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key="760437b1c8e1367a9f32f7e051441ee9";

const searchbox=document.querySelector(".outside-box input");
const searchbtn=document.querySelector(".outside-box button");
const weathericon= document.querySelector(".weather-icon");


async function checkWeather(city) {
    let res = await fetch(url + city + `&appid=${key}`);

    if (!res.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
        return; // ⬅️ STOP here
    }

    let data = await res.json();

    const condition = data.weather[0].main.toLowerCase();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    weathericon.src = `./assets/${condition}.png`;

    document.querySelector(".Weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}



searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
});

