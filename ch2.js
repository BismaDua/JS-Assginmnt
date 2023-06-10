// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Bisma";

// 3. Write a script to:
//    a) Declare a JS variable, titled message.
//    b) Assign "Hello World" to the variable message.
//    c) Display the message in an alert box.
var message;
message = "Hello It's me Bisma";
alert(message);

// 4. Write a script to save student's bio data in JS variables and show the data in alert boxes.
var studentName = "Bisma";
var age = 21;
var grade = "A+";

alert("Student Name: " + studentName);
alert("Age: " + age);
alert("Grade: " + grade);

// 5.Write a script to display the following alert using one JS 
//variable:
var pizzaVariable = "PIZZA";

for (var i = pizzaVariable.length; i > 0; i--) {
  var slicedPizza = pizzaVariable.slice(0, i);
  alert(slicedPizza);
}

//6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)

var email = "example@example.com";  
alert("Your email address is: " + email);

//7.Declare a variable called book & give it the value “A
//smarter way to learn JavaScript”. Display the following
//message in an alert box

var book = "A smarter way to learn JavaScript";
alert("I am currently reading the book: " + book);

//8.Write a script to display this in browser through JS
  document.write("This is a message displayed in the browser using JavaScript.");

//9.Store following string in a variable and show in alert and 
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(myString);
document.write(myString);

