import React, { useState } from "react";
function Weather() {
    const [city, setCity] = useState('Varanasi');
    return (

        <div>
            <h1>{city}</h1>
            <input
                type="text"
                placeholder="search"
                onChange={(e) => setCity(e.target.value)

                }
            ></input>



        </div>
    );
}
export default Weather;