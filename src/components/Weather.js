import React, { useState } from "react";
import axios from "axios";
function Weather() {

    const handleSearch = () => {
        const appid = `4a1f8a61b74546825af1e0be106e797b`;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;

        console.log("clicked");
        console.log(url);
//*************************************************************************** */

axios.get(url).then((response) => {
    console.log(response.data);
}


).catch((error)=>{
console.log(error);


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


        </div>
    );
}
export default Weather;