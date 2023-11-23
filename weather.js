document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "eccf849914172e63308a7b80101b3278";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const sbox = document.querySelector(".search input");
    const sbutton = document.querySelector(".search button");

    async function getWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.celsius').innerHTML = Math.round(data.main.temp);
        document.querySelector('.wind').innerHTML = data.wind.speed;
        document.querySelector('.tint').innerHTML = data.main.humidity;    
    }

    sbutton.addEventListener("click", ()=>{

         // Remove any existing error messages
         var existingError = document.querySelector(".error");
         if (existingError) {
             existingError.remove();
         }

        if(sbox.value===""){ 
            const ermsg = document.querySelector(".emsg");

            let er = document.createElement("div");

            let bclose = document.createElement("button");

            // var textN = document.createTextNode("Enter city name!")
            er.className="error";
            bclose.className="close";

            // er.appendChild(textN);
            ermsg.appendChild(er);
            
            er.innerHTML = 'Enter City Name';
            
            er.appendChild(bclose);

            bclose.innerHTML = '<i class="fa fa-times"></i>';

            //if clicked close
            bclose.addEventListener('click', ()=>{
                ermsg.removeChild(er);    
            })
        }
        else{
            getWeather(sbox.value);
        }
        sbox.value="";
    });
});

