import React, { useState } from "react";
function Weather() {

    const handleSearch = () => {
        console.log("clicked");
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