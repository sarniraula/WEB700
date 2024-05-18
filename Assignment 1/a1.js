/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Saroj Niraula Student ID: 154184238 Date: 5/18/2024
*
********************************************************************************/ 

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]; 

var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];

var serverResponses	= [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Saroj Niraula",
    "sniraula1@myseneca.ca Saroj Niraula",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
]			

//Generates the random number 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function httpRequest(serverVerb, serverPath) {
    var successCode = 200;
    var errorCode = 404;
    for (i=0; i<serverVerbs.length; i++) {
        if (serverVerbs[i] == serverVerb && serverPaths[i] == serverPath) {
            var successMsg = `${successCode}: ${serverResponses[i]}`
            return successMsg
        } 
    }
    var errorMsg = `${errorCode}: Unable to process ${serverVerb} request for ${serverPath}`;
    return errorMsg;
} 

function automateTest () {
    var testVerb = ["GET", "POST"];
    var testPath = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    function randomRequests () {
        var randVerb = testVerb[getRandomInt(2)]
        var randPath = testPath[getRandomInt(8)]
        var finalOutput = httpRequest(randVerb, randPath)
        console.log("Request: ", randVerb, randPath)
        console.log(finalOutput)
        console.log("")
    }
    setInterval(randomRequests, 1000)  
}

automateTest();