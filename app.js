const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js');

const location = process.argv[2];

if(!location){
    console.log('Please provide a location.');
} else {
    geocode(location, (error, geoData) => {
        if(error){
            return console.log(error);
        }
        console.log('Error', error);
        console.log('Data', geoData);
        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log('Error', error);
            console.log('Data', forecastData);
        });
    });
}




