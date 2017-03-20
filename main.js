// Global vars -->
var commaPresent = false;
var savedValue = 0;
var operatorPicked;
// <--

$(document).on("click", "button", function() {
    
    if(parseFloat($(this).attr("data-id")) || $(this).attr("data-id") == 0){
        writeToInputField($(this).attr("data-id"));

    }else{
        
        savedValue = $(document).find("#input-field").val();

        switch($(this).attr("data-id")) {

        	case "ac":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	case "÷":
        		console.log($(this).attr("data-id"));
        		operatorPicked = '/';
        		break;
        	case "x":
        		console.log($(this).attr("data-id"));
        		operatorPicked = 'x';
        		break;	
        	case "-":
        		console.log($(this).attr("data-id"));
        		operatorPicked = '-';
        		break;
        	case "+":
        		console.log($(this).attr("data-id"));
        		operatorPicked = '+';
        		break;
        	case "=":
        		console.log($(this).attr("data-id"));
        		totalSum();
        		break;
        	case ",":
        		console.log($(this).attr("data-id"));
        		//Method call
        		break;
        	default:
        		console.log('Button not active');

        }
    }
    
});


function writeToInputField(elementId) {
    
    var text = $(document).find("#input-field").val();
    text += elementId;
    
    $(document).find("#input-field").val(text);
 
}

function division(){ // funktion för division
    savedValue = savedValue/$(document).find("#input-field").val();
}

function addition() {
  savedValue  = savedValue + talet;
}
 

function multiply() {
	savedValue = savedValue * talet;
}

function handleErrorCalculation() {
    if (savedValue == 0){
        savedValue = "Error";
    }
    else
        savedValue = savedValue;
} 

function totalSum() {
    if (operatorPicked == "-") {
        substraction();
    }
    else if (operatorPicked == "+"){
        addition();
    }
    else if (operatorPicked == "/"){
        division();
    }
    else if (operatorPicked == "x") {
        multiplication();
    }
    else
        savedValue = "Something went wrong";

     writeToInputField($(this).attr(savedValue));
}
