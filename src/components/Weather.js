import React, { useState } from "react";
import axios from "axios";
function Weather() {
    const showWeather = () => {
        console.log("Showing weather");
        let saveddata = localStorage.getItem(city.toLowerCase().trim());
        if (saveddata == null) {
            console.log("No dataa ");
            return;
        }
        const wd = JSON.parse(saveddata);
        const outputdiv = document.getElementById("currentweather");
        outputdiv.innerHTML = wd["weather"][0]["description"];
        document.title = `Weather for ${city}`;
        console.log(saveddata);
    }


    const handleSearch = () => {
        const appid = `4a1f8a61b74546825af1e0be106e797b`;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;

        console.log("clicked");
        console.log(url);
        //*************************************************************************** */

        axios.get(url).then((response) => {
            console.log(response.data);
            localStorage.setItem(city.toLowerCase().trim(), JSON.stringify(response.data));
            showWeather();
        }


        ).catch((error) => {
            console.log(error);
            showWeather();

        });

        //************************************************************************************ */



    };



    const [city, setCity] = useState('Varanasi');
    return (

        <div>
            <h1>{city}</h1>
            <input
                type="text"
                placeholder="search"
                onChange={(e) => setCity(e.target.value)

                }
            ></input><br></br>
            <button
                type="button"
                onClick={handleSearch}
            >Get</button>
            <div id="currentweather">


            </div>

        </div>
    );
}
export default Weather;