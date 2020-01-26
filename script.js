let cityFld = document.getElementById("data_1");
let searchBtn = document.getElementById("search-btn");

sendRequest();

searchBtn.addEventListener('click', () => {
    let city = cityFld.value;
    sendRequest(city)
});

function sendRequest(city = 'Ivano-Frankivsk') {
    let xhr = new XMLHttpRequest();
    let host = "https://api.openweathermap.org/data/2.5/weather";
    let apiid = "b0630785f357d42839b9b98b71d4147c"; 
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                temp.textContent = Math.round(data.main.temp - 273);
                pressure.textContent = Math.round(data.main.pressure*0.00750063755419211*100);
                humidity.textContent = data.main.humidity;
                wind_speed.textContent = data.wind.speed;
                clouds.textContent = data.clouds.all;
                //console.log(data);
            } else {
                //f
            }
        }
    }
    xhr.open("get", host + "?q=" + city + "&APPID=" + apiid);
    xhr.send();
}









