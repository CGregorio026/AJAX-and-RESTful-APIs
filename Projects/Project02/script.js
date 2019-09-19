/*  Project 01_11_04

    Author: Christian Gregorio
    Date: 9.18.19

    Filename: script.js
*/

"use strict";

var httpRequest = false;
// defines process to make a request
function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        document.getElementById("csset").style.visibility = "visible";
        var zip = document.getElementById("zip").value;
        if (zip.addEventListener) {
            zip.removeEventListener("keyup", checkInput, false);
        } 
        else if (zip.attachEvent) {
            zip.detachEvent("onkeyup", checkInput);
        }
        return false;
    }
    // console.log(httpRequest);
    return httpRequest;
}

function checkInput(){
    // alert("checkInput()");
    var zip = document.getElementById("zip").value;
    // checks to see if the zip code is exactly 5 letters.
    if (zip.length === 5) {
        // calls the getLocation function ONLY when a full zip code is detected.
        getLocation()
    }
    else {
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}

function getLocation(){
    // console.log("getLocation()");
    var zip = document.getElementById("zip").value;
    // performs a get request to the server to obtain data from an array.
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
    // gets the data from the api listed in the http request section
    httpRequest.abort();
    httpRequest.open("get", "http://api.zippopotam.us/us/" + zip, true);
    httpRequest.send(null);
    httpRequest.onreadystatechange = displayData;

    function displayData() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var resultData = JSON.parse(httpRequest.responseText);
            // console.log(resultData);
            var city = document.getElementById("city");
            var state = document.getElementById("state");
            city.value = resultData.places[0]["place name"];
            state.value = resultData.places[0]["state abbreviation"];
            document.getElementById("zip").blur();
            document.getElementById("csset").style.visibility = "visible";
        }
    }
}
// when a user releases a key, we will check the CheckInput command
var zip = document.getElementById("zip");
if (zip.addEventListener){
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent){
    zip.attachEvent("onkeyup", checkInput);
}