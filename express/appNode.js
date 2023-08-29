const http = require('http');
const url = require('url');
const queryString = require('querystring');
const { error } = require('console');

const weatherApp = require('./src/weatherApp')
const port = 3005;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

    const parseUrl = url.parse(req.url);
    const parsedQuery = queryString.parse(parseUrl.query);
    console.log(parsedQuery);
    if (!parsedQuery.address) {
        res.statusCode = 400;
        res.end(
            JSON.stringify({
                error: 'Must Enter the addresss'
            })
        );
        return;
    }

    weatherApp(parsedQuery.address)
        .then(data => {
            res.statusCode = 200;
            res.end(

                JSON.stringify(

                    data

                )
            );
        })
        .catch(error => {

            res.statusCode = 500;
            res.end(
                JSON.stringify(
                    {
                        error: "Error in getting the weather data"
                    }
                )
            );
        })

}); // <-- added missing comma and closing parenthesis




server.listen(port, () => {
    console.log(`Server is up on port ${port}`);

});
