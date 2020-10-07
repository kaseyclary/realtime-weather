//Using request node module
const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=44bbcac212311578107f1f0200340d3c&query=41.521910,-93.626250"

//json: true is a request argument that automatically parses the json response
//otherwise would use JSON.parse(response.body) - this eliminates that need
//Use a browser extension to format JSON in the browser to make it more readable
request({url: url, json: true}, (error, response) => {
    console.log(`It is currently ${(response.body.current.temperature * (9/5)) + 32} degrees out and there is a ${response.body.current.precip}% chance of rain`);
});