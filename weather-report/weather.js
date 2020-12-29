const request = require('request');

var getReport = (address) => {
    const weather_api = 'http://api.weatherstack.com/current?access_key=df35ff794b50ecb89f1caf535e7d752a&query=' + address;
    request({ url: weather_api, json: true }, (error, response) => {
        if (error) {
            console.log('Something went wrong. Please try again.');
        } else if (response.body) {
            var location = response.body.location;
            resData(location);
        }
    });
}


const resData = (data) => {
    console.log(`Location Name: ${data.name}`);
    console.log(`Latitudes: ${data.lat}`);
    console.log(`Longitudes: ${data.lon}`);
}

module.exports = {
    getReport
}
