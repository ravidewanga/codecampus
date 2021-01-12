const express = require('express')
const utils = require('./public/js/utils');

const app = express()
app.use(express.static('public'));

const port = process.env.PORT || 3000;


app.get('/getDetails', (req, res) => {
    var req_data = req.query.search;
    if (req_data == '') {
        res.send({
            error: 'Please enter Movie Name.'
        })
    } else {
        utils.omdb(req_data, (error,response) => { 
            if (error != null || response.body.Error != '') {
                res.send({
                    error: 'Movie not found.'
                })
            } else {
                res.send({
                    response: response
                })
            }
        })        
    }
});

app.listen(port, () => {
    console.log(`server is run on port ${port}`);
})