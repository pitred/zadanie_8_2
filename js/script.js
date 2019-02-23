'use strict';
var temp;
var output = document.getElementById('tempConvert-output__div');
output.innerHTML = '<br> Click the button to convert temperature' + '<br><br>' + output.innerHTML;
var button = document.getElementById('tempConvert__button');



button.addEventListener('click', function () {

    userName = window.prompt('What is your name?');


    output.innerHTML = 'Hello ' + userName + '!' + '<br><br>' + output.innerHTML;
});