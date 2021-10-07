let weather = {
  API_KEY: "bd01f89a94a8e0750539303f12bd4792",
  getWeather: function (city ) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_KEY}`
      ).then(response => response.json())
        // .then( (data) => this.displayWeather(data) )
        .then(data => {console.log(data);
          displayWeather(data);
          // const {name} = data;
          // const {country} = data.sys;
          // const {speed} = data.wind;
          // const {humidity, temp} = data.main;
          // const {icon} = data.weather[0].icon;

          // console.log(name, country, speed, humidity, temp);

          // document.getElementById('city-title').textContent = name;
          // document.getElementById('temperature').textContent = Math.round(temp) + " ℃";
          // document.getElementById('clouds').innerHTML = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          // document.getElementById('humidity').textContent = humidity + " %";
          // document.getElementById('wind').textContent = speed + " km/h"
          // // http://openweathermap.org/img/wn/10d@2x.png
        });    
  },
};

function displayWeather(data) {
  const {name} = data;
  // const {country} = data.sys;
  const {speed} = data.wind;
  const {humidity, temp} = data.main;
  const {description} = data.weather[0];
  // const {description, icon} = data.weather[0];

  document.getElementById('city-title').textContent = name;
  document.getElementById('temperature').textContent = Math.round(temp) + " ℃";
  document.getElementById('humidity').textContent = "Humidity: " + humidity +" %";
  document.getElementById('wind').textContent = "Wind: " + speed + " km/h";
  document.getElementById('description').textContent = description.toUpperCase();
  document.body.style.background = `url('https://source.unsplash.com/1600x900/?${name}')`;
}

const search = document.getElementById('search');
const btnSearch = document.querySelector('.btn-search');
btnSearch.addEventListener('click', () => {
  weather.getWeather(search.value);
});

search.addEventListener('keypress', (event) => {
  if(event.keyCode === 13) {
    weather.getWeather(search.value);
  }
});

// `https://source.unsplash.com/1600x900/?${name}`

// function setSkyIcons(icon, iconID) {
//   let skycons = new Skycons( {'color': 'white'} );
//   let surrentIcon = icon('rain')
// }