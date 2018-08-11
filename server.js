var express = require("express");
var bodyParser = require("body-parser"); 
var path = require("path");

var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var data = {
    reservations : [{
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },
    {
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },
    {
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },
    {
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },
    {
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },
    {
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },
    {
        name : "Jobe",
        number : "5102222222",
        email : "hotdamn@yahoo.com",
        unique : "51"
    },],
    waitlist : [],
};


var visitorCount = 0;

app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
    res.sendfile(path.join(__dirname, "reserve.html"));
    visitorCount++
});

app.get("/tables", function(req, res) {
    res.sendfile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(data.reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(data.waitlist);
});



// app.post("/api/new", function(req, res) {
//     var tableData = req.body;
//     console.log(tableData);
//     if (tableData && tableData.name) {
//         tableData.rout
//     }  
// })

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.name = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    data.reservations.push(newcharacter);
  
    // res.json(newcharacter);

    var tableData = req.body;

    if (data.reservations.length > 5) {
        data.waitlist.push(tableData);
        console.log("asdf");
    }else {
        data.reservations.push(tableData);
        console.log("asdf");
    }
    
    res.json(tableData)
  });

//   app.post("/api/waitlist", function())

// if (data.reservations.length > 5) {
//     data.reservations.push(tableData);
// }else {
//     data.waitlist.push(tableData);
// }

// res.json(tableData)



app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT)
})