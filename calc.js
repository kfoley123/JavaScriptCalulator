var input = document.getElementById('input');
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");

// these are adding a click eventlistener to the buttons which runs the function that's inside the click listener
plus.addEventListener("click", addValue);
minus.addEventListener("click", addValue);
divide.addEventListener("click", addValue);
multiply.addEventListener("click", addValue);
one.addEventListener("click", addValue);
two.addEventListener("click", addValue);
three.addEventListener("click", addValue);
four.addEventListener("click", addValue);
five.addEventListener("click", addValue);
six.addEventListener("click", addValue);
seven.addEventListener("click", addValue);
eight.addEventListener("click", addValue);
nine.addEventListener("click", addValue);
zero.addEventListener("click", addValue);
equals.addEventListener("click", doMath);

clear.addEventListener("click", clearBox);

// this function takes the click event and grabs the targets inner HTML, and then adds that value to the input box
function addValue(event) {
    input.value += event.target.innerHTML;
}

// this function sets the value of the input (the text box) to empty string
function clearBox() {
    input.value = "";

}

function doMath(){
    var splitString;
    if(input.value.includes("+")){
        splitString = input.value.split("+");
        input.value = parseInt(splitString[0]) + parseInt(splitString[1]);
    }
    else if(input.value.includes("-")){
        splitString = input.value.split("-");
        input.value = parseInt(splitString[0]) - parseInt(splitString[1]);
    }
    else if(input.value.includes("X")){
        splitString = input.value.split("X");
        input.value = parseInt(splitString[0]) * parseInt(splitString[1]);
    }
    else if(input.value.includes("/")){
        splitString = input.value.split("/");
        input.value = parseInt(splitString[0]) / parseInt(splitString[1]);
    }
}   

