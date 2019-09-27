he has code
so basically what he do is that he make an XHR and he do the goods dog, we got that request on deck, bread on deck, bread on the floor, he has get buttons, post buttons, and he gets the data and posts the data at the same time. he has everything in es6 and you can see that because he has a lot of const and arrow functions in his code. he has a get verb and a post verb, and get gets data, and post sends data. homie got a click event, and he'll be able to click that event listener button to get the functions to run
"getBtn.addEventListener('click', getData);
"postBtn.addEventListener('click', sendData);
using the fetch api allows you to get a request from an area. inside of that fetch function he posts a URL there, and gets the information from that function. fetch is based on the ideas of promises, which use the .then() method. inside of the then method, the response is recorded, and the arrow functions are then set to enter the console. inside of that console, the response is logged. 
the get data button is able to receive the data from the api, and supplies the information located inside of that api request
in the fetch api, you can call the response method, and if you do response.json(), it automatically parses the xhr data into a JSON method, getting you a snapshot of the code which will be in text form. this will also get you the data in javascript data types.
multiple .then() methods can be chained to propagate the promise more than once.
the method is the verb which is passed through the argument to either get or post data.
arrow syntax can be tricky to debug; anonymous functions can really be scary
"re-giss-ter"
passing a second argument to fetch allows us to configure how data is passed through the fetch. may be written as such:

fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {'Content-Type': 'application/json' } : {}
})

catching code will log errors before they are ran
sometimes fetch will refuse to not run errors, and that's bad because if our code continues when we don't have any acceptable data, we can't do anything with the data that we don't have. throwing an error will reject the code that should run if the data isn't acceptable.