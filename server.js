var http=require("http");
var express=require("express");

var app=express();
app.get("/",function(req,res){
    res.send("<h1 style='color:darkblue;'>Hello from my own server</h1>");
});


/**
 * CONFIGURATION
 */

 //enable CORS security
 app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//read req body as obj

var bodyParser=require("body-parser");
app.use(bodyParser.json());

/**
 * WEB SERVER FUNCTIONALITY
 */

app.get("/contact",function(req,res){
    res.send("My contact info is: 123-123-123, alfredo@");
});

app.get("/about",function(req,res){
    res.send("My Name is Alfredo Calderon");
});

app.listen(8080, function(){
    console.log("Server running at http://localhost:8080");

});

/**
 * API FUNCTIONALITY
 */

 var items=[];
 var count=0;

 app.get('/api/products',function(req,res){
     console.log("User wants the catalog");
     res.json(items);
 });

 app.post('/api/products',function(req,res){
    console.log("User wants to save item");

    //read the item
    var item=req.body;
    console.log(item);

    //assign unique id

    item.id=count;
    count++;

    //store and send back the item
    items.push(item);
    res.send(item);
});