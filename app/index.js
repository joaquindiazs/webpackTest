//import Logger
var Logger = require('./logger.js');

//import CSS
require('../styles.scss');

//update content of greeting element when DOM has been loaded. Using arrow function.
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('greeting').innerHTML = "Hello my friend!";
    Logger("Greeting has been updated");
})