const express = require('express');
const cors = require('cors');
const weatherApp = require('./src/weatherApp');


const app = express();
app.use(cors());
const port = 3005;


app.get('/weather', async (req, res) => {
    console.log(req.query);
    if (!req.query.address) {
        res.statusCode = 400;
        res.send({
            error: 'Must Enter the addresss'
        });
        return;
    }
    const data = await weatherApp(req.query.address)
    res.send(data);

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
}
);