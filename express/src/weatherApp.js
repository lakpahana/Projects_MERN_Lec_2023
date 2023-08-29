const weatherApp = (address) => {
    return new Promise((resolve, reject) => {
        const API_KEY = '6bd27019db3b4dc2a2a142218230808';
        const info ={
            url : `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${address}&aqi=no`,
            json: true
        }

        request(info, (error, response) => {
            if (error) {
                reject('Unable to connect to weather service!');
            } else if (response.body.error) {
                reject('Unable to find location');
            } else {
                resolve(response.body);
            }
        });
    }
    )
}

module.exports = weatherApp;