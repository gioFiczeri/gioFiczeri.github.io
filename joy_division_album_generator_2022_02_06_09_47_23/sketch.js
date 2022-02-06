//GIO FICZERI
//Joy Division Album Cover Generator
//ART 151


//stores user input
var input;
var button;
//spacing for lines to make sure they dont overlap
let space=20;
//stores number of characters within a string
var nameLength;

function setup() {
  createCanvas(400,600);
  //creates text box used for user input
  input=createInput();
  //creates button with prompt that when clicked executes processName(); function
  button=createButton("What's your name?");
  button.mousePressed(processName);
}

function draw() {
  background(220);
  let numOfLines=nameLength;
  //for loop that arrays through the value assigned to numOfLines(length of name)//then draws that number of lines//later lines will be changed to be curved
 for (let y = 0; y < numOfLines; y++) {
    for (let x = 0; x < numOfLines; x++) {   line(x*space,y*space+300,x*space+400,y*space+300);
    }
  }
  
}
function processName(){
  //assigns name as what was entered in input box
  name=input.value();
  //for loop to assign length of string to a variable
  for (var i=0; i<name.length;i++){
    //+1 accounts for array starting at 0
   nameLength=i+1;
  }  
  //used as test to make sure correct value is being returned, uncomment to use-----------> console.log(nameLength);
  //returns number needed for determining number of lines to be drawn
  return nameLength;
}