const request = require('request');
var express = require("express");

var app = express();

app.use(express.static("public"));

app.post('/api/v2/audience/bulkSetTags', (req, res) => {
    //https://api.pushwoosh.com/api/v2/audience/bulkSetTags
    req.pipe(request("https://api.pushwoosh.com/api/v2/audience/bulkSetTags")).pipe(res);
});

app.get('/api/v2/audience/bulkSetTags/*', (req, res) => {
    //https://api.pushwoosh.com/api/v2/audience/bulkSetTags
    req.pipe(request(`https://api.pushwoosh.com${req.url}`)).pipe(res);
});

module.exports = app