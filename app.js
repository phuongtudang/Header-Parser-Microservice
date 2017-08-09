var express = require("express");
var app = express();
var useragent = require("express-useragent");

app.set("view engine", "ejs");

app.use(useragent.express());
app.get('/', function(req, res){
    var software =      req.useragent.os,
        language =      req.headers['accept-language'].split(',')[0],
        ipaddress =     req.headers["x-forwarded-for"];
        
    res.json({
        "IPAddress": ipaddress,
        "Language": language,
        "Software": software
    })    
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is runnning!!")
});