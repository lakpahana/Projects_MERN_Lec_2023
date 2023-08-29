const http = require('http');
const url = require('url');
const queryString = require('querystring');
const { error } = require('console');

const weatherApp = require('./src/weatherApp')
const port = 3005;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = url.parse(req.url);
    const parsedQuery = (parsedUrl.query);

    if (!parsedQuery.address) {
        res.statusCode = 400;
        res.end(
            JSON.stringify({
                error: 'Address must be provided'
            })
        );
        return;
    }

    weatherApp(parsedQuery.address,)
    .then(data=>{
        res.statusCode = 400;
        res.end(
            
            JSON.stringify(
                {
                    error: "Address must be provided"
                }
            )
        ); 
    })
    .catch(error=>{
        res.statusCode = 400;
        res.end(
            JSON.stringify(
                {
                    error: "Address must be provided"
                }
            )
        ); 
    })

}); // <-- added missing comma and closing parenthesis




server.listen(port, () => {
    console.log(`Server is up on port ${port}`);

});
