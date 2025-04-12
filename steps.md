     axios.get(url).then(
        
        
        (response) => {
     // IF SUCCESS
             
        }


        ).catch((error) => {
          // IF FAILED
          

        });  
    
    
    axios.get(url).then((response) => {
        //Data will be available as response.data
            console.log(response.data);
             
        }


        ).catch((error) => {
            //error available as error
            console.log(error);
          

        });    
    
    axios.get(url).then((response) => {
            console.log(response.data);
            localStorage.setItem(city.toLowerCase().trim(), JSON.stringify(response.data));
            showWeather();
        }


        ).catch((error) => {
            console.log(error);
            showWeather();

        });