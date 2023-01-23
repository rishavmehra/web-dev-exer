const getWeather = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Susdfsdfnny")
        }, 2000);
    })
}

const getWeatherIcon = (weather) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            switch (weather) {
                case "Sunny":
                    resolve("Yo Sunny");
                    break;
                case "Ranny":
                    resolve("Yo Ranny");
                    break;
                case "Cloudy":
                    resolve("Yo Cloudy");
                    break;
                default:
                    reject("Value or this | no weather found");
                    break;
            }
        }, 2000);
    })
}

const onSuccess = async() => {
    
}

const onError = async(error) => {
    console.log(`Error: ${error}`);
}
getWeather()
    .then(getWeatherIcon)
    .then(onSuccess)
    // .then(onSuccess, onError)
    .catch(onError)