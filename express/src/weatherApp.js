const request = require('request');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

const weatherApp = (address) => {
    return new Promise((resolve, reject) => {

        //TODO

        // use proxy

        // const HTTP_PROXY = 'http://10.50.225.222:3128';






        const API_KEY = 'b71cb84f8ee94e599f985343232408';
        const info = {
            url: `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}&aqi=no`,
            json: true
        }
        // console.log(info, 'info')
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

        // fetch(info.url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'User-Agent': 'Mozilla/5.0',
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     agent: new HttpsProxyAgent(HTTP_PROXY)
        // })

        //     .then(res => res.json())
        //     .then(json => {
        //         resolve(json);
        //     }
        //     )
    }
    )
}

module.exports = weatherApp;