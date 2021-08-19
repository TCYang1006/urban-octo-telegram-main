/*this creates a function named "fight"
function fight(){
var playerName = window.prompt("What is your robot's name?");

window.alert(playerName);
//console log
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);
// Tony the Robot is ready for battle!
console.log("Tony the Robot" + " is ready for battle!");
// "Tony the Robot is ready for battle!"
console.log(playerName + " is ready for battle!");
// "Your robot, Tony the Robot, has won!
console.log("Your robot, " + playerName + ", has won!");
var name="TC";
console.log(name);
}*/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth =enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(playerName +" attacked "+ enemyName +". "+ enemyName +" now has "+ enemyHealth +" health remaining.");
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack
  // Log a resulting message to the console so we know that it worked.
    console.log(enemyName +" attacked "+ playerName +". "+ playerName +" now has "+ playerHealth +" health remaining.");
};

/*fight is the function*/
fight();