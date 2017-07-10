/**
 * Created by arpit on 3/7/17.
 */
var express=require('express');
const request = require('request');
var fs=require('fs');
var path=require('path');
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
var jsonPath = path.join(__dirname, '..', './public/log');

app.use(express.static('./public'));
var data;


    console.log("hello");
    fs.readFile('log', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

           console.log(data);
            console.log("data ends");
    });

//console.log("sad"+data);
// console.log("hello");

app.get('/get',function (req,res) {
    console.log("hello");
    // request('/home/arpit/WebstormProjects/dashboard/log', function(error,response,body) {
    //         console.log(error)
    //     console.log(response,body)
    //     res.send(body)
    // })
     fs.readFile('log', 'utf8', (err, data) => {
         console.log(data)
         res.send(data)
     })
   // // var dat=f();
    //console.log(dat);
      //  res.send(dat);
});
app.get('/gets',function(req,res){
    res.sendFile("/home/arpit/WebstormProjects/dashboard/log");
    res.send(JSON.stringify(jsonObject))//sample to send json
});
app.get('/', function (req , res) {

    res.sendFile( path.join( __dirname ,  './public/index.html' ) );
    console.log("hello");
    res.send(data);
})
app.listen(8000);
