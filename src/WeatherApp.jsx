import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        maxTemp: 25.05,
        minTemp: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze"
    });


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>🌤️SkySnap - A Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
      <InfoBox result={weatherInfo} />
        </div>
    )
}