const apikey = "4d5612e1d5d4ffac271d1e71afd9a4c0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?";

const searchbox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherimg = document.querySelector('.weather-img')

async function checkweather(city) {
    const response = await fetch(apiurl + "q=" + city + "&appid=" + apikey + "&units=metric");
    // if(response.status == 404){
         
    // }
    var data = await response.json();
    console.log(data)    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
    if(data.weather[0].main == "Clouds"){
        weatherimg.src = "../images/clouds.jpg" 
    }
    else if(data.weather[0].main == "Clear"){
        weatherimg.src = "../images/clear.jpg"
    }
    else if(data.weather[0].main == "Rain"){
        weatherimg.src = "../images/rain.webp"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherimg.src = "../images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherimg.src = "../images/mist.png"
    }else{
        console.log("inavalid input")
    }
    document.querySelector(".weather").style.display = "block";
    // document.querySelector(".weather-situation").style.display = "block";
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})