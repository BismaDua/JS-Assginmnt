/*1. Write a program that take two numbers & add them in a 
new variable. Show the result in your browser.*/

  var number1 = prompt("Enter the first number:");
  number1 = parseFloat(number1);

  var number2 = prompt("Enter the second number:");
  number2 = parseFloat(number2);

  var sum = number1 + number2;

  document.write("The sum of " + number1 + " and " + number2 + " is: " + sum);

//2. Repeat task 1 for subtraction, multiplication, division & modulus:

  var number1 = prompt("Enter the first number:");
  number1 = parseFloat(number1);

  var number2 = prompt("Enter the second number:");
  number2 = parseFloat(number2);

  var sum = number1 + number2;
  var difference = number1 - number2;
  var product = number1 * number2;
  var quotient = number1 / number2;
  var remainder = number1 % number2;

  document.write("The sum is: " + sum + "<br>");
  document.write("The difference is: " + difference + "<br>");
  document.write("The product is: " + product + "<br>");
  document.write("The quotient is: " + quotient + "<br>");
  document.write("The remainder is: " + remainder + "<br>");

//3. Do the following using JS Mathematic Expressions:
  var myVariable;

  document.write("Value after variable declaration is: " + myVariable + "<br>");

  myVariable = 5;
  document.write("Initial value: " + myVariable + "<br>");

  myVariable++;
  document.write("Value after increment is: " + myVariable + "<br>");

  myVariable += 7;
  document.write("Value after addition is: " + myVariable + "<br>");

  myVariable--;
  document.write("Value after decrement is: " + myVariable + "<br>");

  var remainder = myVariable % 3;
  document.write("The remainder is: " + remainder);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie:

  var ticketPrice = 600;
  var totalCost = ticketPrice * 5;
  document.write("Total cost to buy 5 tickets: " + totalCost + " PKR");

//5. Write a script to display the multiplication table of any number in your browser:

  var number = prompt("Enter a number:");
  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + number * i + "<br>");
  }

//6. The Temperature Converter:

  var celsiusTemperature = 25;
  var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
  document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

  fahrenheitTemperature = 77;
  celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
  document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");

//7. Write a program to implement the checkout process of a shopping cart system for an e-commerce website:

  var priceItem1 = 100;
  var priceItem2 = 200;
  var quantityItem1 = 3;
  var quantityItem2 = 2;
  var shippingCharges = 50;

  var totalCost = priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

  document.write("Price of Item 1: " + priceItem1 + "\n");
  document.write("Quantity of Item 1: " + quantityItem1 + "\n")
  document.write("Price of Item 2: " + priceItem2 + "\n");
  document.write("Quantity of Item 2: " + quantityItem2 + "\n")
  document.write("Shipping charges" + shippingCharges + "\n")
  document.write("Total Cost: " + totalCost + "\n")



