//http://api.weatherapi.com/v1/current.json?key=3b561771343246e3bc7183736242111&q=pakistan&aqi=no


let input = document.querySelector("#input");
let check = document.querySelector("#check");
let div = document.querySelector("#render");

function weatherAPI(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=3b561771343246e3bc7183736242111&q=${input.value}&aqi=no`)
    .then(res => res.json())
    .then((res) => {
        console.log(res)
        div.innerHTML = `<div class="card">
        <h1>Current Temperature: ${res.current.temp_c} , Humidity: ${res.current.humidity}</h1>
        <h2>FeelsLike: ${res.current.feelslike_c}</h2>
       <h1>Location: ${res.location.name},</h1> <h3>${res.location.region} ${res.location.country}</h3>
        </div>`
})
}

check.addEventListener('click', weatherAPI)