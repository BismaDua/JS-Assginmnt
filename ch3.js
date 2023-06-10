//1. Declare a variable called age & assign to it your age. Show

var age = 25;
alert("Your age is: " + age);

//2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

  var visitCount = 0;
  if (localStorage.getItem("visitCount")) {
    visitCount = parseInt(localStorage.getItem("visitCount"));
  }
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  document.write("You have visited this site " + visitCount + " times.");

  //3.Declare a variable called birthYear & assign to it your
//birth year. Show the following message in your browser

  var birthYear = 1990;
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  document.write("My birth year is " + birthYear + "\n");
  document.write("The current year is " + currentYear + "\n");
  document.write("My age is " + age + " years old.");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

  var visitorName = "John Doe";
  var productTitle = "T-shirt";
  var quantity = 5;
  document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");

