//Using request node module
const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=44bbcac212311578107f1f0200340d3c&query=41.521910,-93.626250"

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log((data.current));
});