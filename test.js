//Declare product and price variables
var product_1, product_2, product_3;
var price_1, price_2, price_3;

//Give the products names
product_1 = "Nike Shoes (1 Pair)";
product_2 = "Fake Nike Airs (1 Pair)";
product_3 = "Samsung Galaxy Note 20 Ultra";

//Give the products prices
price_1 = 55000;
price_2 = 5000;
price_3 = 850000;

//Create a balance for user
var virtual_balance = 850000;

//Create variable for user selections
var user_selection;

//Welcome user and ask for their name
var user_name;
user_name = prompt("Good day, \nWelcome to Odinma's simple E-Commerce App! \nWhat is your name? (This will be used to create an account for you):");

//If user provides their name then use it throughout the app else recognise them as a guest

if (user_name != "") {
   console.log("Hello " + user_name);
   
   //Provide user with list of available items & Ask the user to choose which item they want to buy by inputting the number
   user_selection = prompt("Hello " + user_name +", These are the items currently available: \n\n1. " + product_1 + " @ " + price_1 + " NGN" + "\n2. " + product_2 + " @ " + price_2 + " NGN" +  "\n3. " + product_3 + " @ " + price_3 + " NGN" +  "\n\nTO CHOOSE AN ITEM TO BUY JUST INPUT IT'S NUMBER. (Eg: 1) \n\nYour current virtual balance is: "+ virtual_balance + " NGN");

} else {
   console.log("You didn't put in your name");
   
   user_name = "Guest";
   console.log('You will be referred to as: ' + user_name);
   
   //Provide user with list of available items & Ask the user to choose which item they want to buy by inputting the number
   user_selection = prompt("Hello " + user_name +", These are the items currently available: \n\n1. " + product_1 + " @ " + price_1 + " NGN" + "\n2. " + product_2 + " @ " + price_2 + " NGN" +  "\n3. " + product_3 + " @ " + price_3 + " NGN" +  "\n\nTO CHOOSE AN ITEM TO BUY JUST INPUT IT'S NUMBER. (Eg: 1) \n\nYour current virtual balance is: Unavailable");
}

//if the user inputted their name then they can make purchases. I used a switch because the if statement i initially planned didn't work out
if (user_name !== "Guest") {
   switch (user_selection) {
      
      case "1": console.log("Dear " + user_name +", \nYou bought a "+ product_1 + " at " + price_1 + " NGN and it will be shipped to you in a few days");
      virtual_balance = virtual_balance - price_1;

      console.log("New balance = " + virtual_balance + " NGN")

      console.log("Thank you for your patronage. Your receipt has been sent to your mail");
      break;

      case "2": console.log("Dear, " + user_name +", \nYou bought a "+ product_2 + " at " + price_2 + " NGN and it will be shipped to you in a few days");
      virtual_balance = virtual_balance - price_2;
      
      console.log("New balance = " + virtual_balance + " NGN" );
      
      console.log("Thank you for your patronage. Your receipt has been sent to your mail");
      break;

      case "3": console.log("Dear, " + user_name +", \nYou bought a "+ product_3 + " at " + price_3 + " NGN and it will be shipped to you in a few days");
      virtual_balance = virtual_balance - price_3;
      
      console.log("New balance = " + virtual_balance + " NGN")
      
      console.log("Thank you for your patronage. Your receipt has been sent to your mail");
      break;

      default: console.log("You chose a wrong input")
      break;
   }
//if the user didn't input their name then they can't make purchases
} else if (user_name == "Guest") {
    switch (user_selection) {
      case "1": console.log(user_name +", \nYou bought a "+ product_1 + " and it will not be shipped to you because you don't have an account");
      break;

      case "2": console.log(user_name +", \nYou bought a "+ product_2 + " and it will not be shipped to you because you don't have an account");
      break;

      case "3": console.log(user_name +", \nYou bought a "+ product_3 + " and it will not be shipped to you because you don't have an account");
      break;

      default: console.log("You chose a wrong input");
      break;
      }
}
