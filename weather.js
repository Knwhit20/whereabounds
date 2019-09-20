
function displayWeather() {

    var cityName = $("#search-bar").val().trim();
    console.log(cityName);


    // var queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=7169e5ccc01a4702a01e93ee6982101a&units=I&days=5"
   

    var queryUrl = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + cityName + "&key=7169e5ccc01a4702a01e93ee6982101a&units=I&days=5";
   

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            var results = response.data
            console.log(results);

            var weatherDisplay = $("#weather-display")
            
            for (var i = 0; i < results.length; i++) {
                var dayWeather = $("<div>");
                dayWeather.addClass("card-body")
                dayWeather.addClass("text-center");
                dayWeather.addClass("day-weather")
                dayWeather.addClass("col")
                
                var temp = results[i].temp;
                console.log(temp);
              
                var weatherIcon = results[i].weather.icon;
                console.log(weatherIcon)
            

                var icon = $("<img>");
                
                icon.attr("src", "https://www.weatherbit.io/static/img/icons/" + weatherIcon + ".png")
                dayWeather.append(icon);

                dayWeather.append(Math.floor(temp) + " °F  ");
               
                weatherDisplay.append(dayWeather);
        
                

                
            }

        });

}
// displayWeather ()
$("#search-button").on("click", function(event){
    event.preventDefault()
    displayWeather()
})
