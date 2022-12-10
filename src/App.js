import React, { useState } from "react";
import axios from "axios";

function App() {
  const[data, setData] = useState({})
  const [loading, setLoading] = useState('')

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=cf485c676c68a2fbe71d6af1d52e7570';

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => searchLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="bold">{data.name}</p>
          </div>
          <div className="temp">
            <h1>23°C</h1>
          </div>
          <div class="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div class="feels">
            <p>19°C</p>
            <p className="size">Feels Like</p>
          </div>
          <div class="humidity">
            <p>20%</p>
            <p className="size">Humidity</p>
          </div>
          <div class="wind">
            <p>12KPH</p>
            <p className="size">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
