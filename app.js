// Chapter 14 - 16

// Q1 / 2
// var studentName = []
// var enterYourName = prompt( "Please Enter Your Name" );
// studentName.push (enterYourName);
// console.log(studentName)
// alert("Welcome to our website "+ studentName + ". We are glad you joined us!"); 

// Q3
// fruitNames = ["apple", "banana", "orange", "grape"];

// Q4
// var numbersArray = [1, 2, 3, 4, 5];

// Q5
// var booleanArray = [true, false, true, false];

// Q6
// var mixedArray = [true, false, 10, -5, "Hello", "World"];


// Q7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul style='list-style:number'>");
// document.write("<li>" + qualifications[0] + "</li>");
// document.write("<li>" + qualifications[1] + "</li>");
// document.write("<li>" + qualifications[2] + "</li>");
// document.write("<li>" + qualifications[3] + "</li>");
// document.write("<li>" + qualifications[4] + "</li>");
// document.write("<li>" + qualifications[5] + "</li>");
// document.write("<li>" + qualifications[6] + "</li>");
// document.write("<li>" + qualifications[7] + "</li>");
// document.write("</ul>");

// Q8
// var studentNames = ["Bilal", "Usman", "Talha"];
// var scores = [420, 380, 450];

// var percentage1 = (scores[0] / 500) * 100;
// var percentage2 = (scores[1] / 500) * 100;
// var percentage3 = (scores[2] / 500) * 100;

// document.write("<h2>Student: " + studentNames[0] + "</h2>");
// document.write("Score: " + scores[0] + " out of 500<br>");
// document.write("Percentage: " + percentage1.toFixed(2) + "%<br><br>");

// document.write("<h2>Student: " + studentNames[1] + "</h2>");
// document.write("Score: " + scores[1] + " out of 500<br>");
// document.write("Percentage: " + percentage2.toFixed(2) + "%<br><br>");

// document.write("<h2>Student: " + studentNames[2] + "</h2>");
// document.write("Score: " + scores[2] + " out of 500<br>");
// document.write("Percentage: " + percentage3.toFixed(2) + "%<br><br>");

// Q9
// var colors = ["Red", "Green", "Blue"];

// document.write("<h3>Original Array:</h3>"); // Display the original array
// document.write(colors.join(", ") + "<br>");


// var colorToAddStart = prompt("Enter a color to add to the beginning:"); // a. Add color to the beginning
// colors.unshift(colorToAddStart);


// document.write("<h3>Array after adding color to the beginning:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// var colorToAddEnd = prompt("Enter a color to add to the end:"); // b. Add color to the end
// colors.push(colorToAddEnd);


// document.write("<h3>Array after adding color to the end:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// colors.unshift("Yellow", "Orange"); // c. Add two more colors to the beginning


// document.write("<h3>Array after adding two more colors to the beginning:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// colors.shift(); // d. Delete the first color


// document.write("<h3>Array after deleting the first color:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// colors.pop(); // e. Delete the last color


// document.write("<h3>Array after deleting the last color:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// var indexToAdd = prompt("Enter the index to add a color:"); // f. Add color at desired position
// var colorToAdd = prompt("Enter the color name:");
// colors.splice(indexToAdd, 0, colorToAdd);


// document.write("<h3>Array after adding color at desired position:</h3>"); // Display the updated array
// document.write(colors.join(", ") + "<br>");


// var indexToDelete = prompt("Enter the index to delete color(s):"); // g. Delete color(s) from user-defined position/index
// var numToDelete = prompt("Enter the number of colors to delete:");
// colors.splice(indexToDelete, numToDelete);


// document.write("<h3>Array after deleting color(s) from desired position:</h3>"); //Display the updated array
// document.write(colors.join(", ") + "<br>");

// Q10
// var studentScores = [85, 67, 92, 78, 60, 88];

// document.write("<h2>Original Scores:</h2>");
// document.write(studentScores.join(", ") + "<br>");
// studentScores.sort();
// document.write("<h2>Scores Sorted in Ascending Order:</h2>");
// document.write(studentScores.join(", "));

// Q11
// var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
// var selectedCities = [];

// selectedCities.push(cities[0]);
// selectedCities.push(cities[1]);
// selectedCities.push(cities[2]);

// document.write("<h2>Selected Cities:</h2>");
// document.write(selectedCities.join(", "));


// Q12 
// var arr = ["This", "is", "my", "cat"];
// var combinedString = arr.join(" ");

// document.write("<h2>Combined String:</h2>");
// document.write(combinedString);

// Create a new array to store values

// Q13
// var deviceQueue = [];

// deviceQueue.push("keyboard");
// deviceQueue.push("mouse");
// deviceQueue.push("printer");
// deviceQueue.push("monitor");

// var firstDevice = deviceQueue.shift();
// var secondDevice = deviceQueue.shift();
// var thirdDevice = deviceQueue.shift();
// var fourthDevice = deviceQueue.shift();

// document.write("<h2>Devices Stored in FIFO Order:</h2>");
// document.write("First Device: " + firstDevice + "<br>");
// document.write("Second Device: " + secondDevice + "<br>");
// document.write("Third Device: " + thirdDevice + "<br>");
// document.write("Fourth Device: " + fourthDevice + "<br>");

// Q14
// var lifoArray = [];

// lifoArray.unshift("keyboard");
// lifoArray.unshift("mouse");
// lifoArray.unshift("printer");
// lifoArray.unshift("monitor");

// var lastDevice = lifoArray.shift();
// var secondLastDevice = lifoArray.shift();
// var thirdLastDevice = lifoArray.shift();
// var fourthLastDevice = lifoArray.shift();

// document.write("<h2>Devices Stored in LIFO Order:</h2>");
// document.write("Last Device: " + lastDevice + "<br>");
// document.write("Second Last Device: " + secondLastDevice + "<br>");
// document.write("Third Last Device: " + thirdLastDevice + "<br>");
// document.write("Fourth Last Device: " + fourthLastDevice + "<br>");

// Q15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option value='' disabled selected>Select Manufacturer</option>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");