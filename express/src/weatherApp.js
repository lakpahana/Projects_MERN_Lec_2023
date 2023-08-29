const request = require('request');

const weatherApp = (address) => {
    return new Promise((resolve, reject) => {

        const API_KEY = 'b71cb84f8ee94e599f985343232408';
        const info = {
            url: `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}&aqi=no`,
            json: true
        }
        console.log(info, 'info')
        request(info, (error, response) => {
            if (error) {
                reject(error);
                return;
            }
            if (response.body.error) {
                reject(response.body.error);
                return;
            }
            resolve(response.body);
        })
    }
    )
}

module.exports = weatherApp;