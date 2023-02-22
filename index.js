// BMI Calculator
function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMIresult = document.getElementById("BMIresult");
    
    var bmi = weight / (height * height);
    BMIresult.innerHTML = "Your BMI is " + Math.round(bmi);
    
  }

//   Leap Year
function checkLeapYear() {
    var year = document.getElementById("year").value;
    var LeapYear = document.getElementById("LeapYear");

    if (year % 4 === 0 & year % 100 != 0 || year % 400 === 0){
      LeapYear.innerHTML = year + " is a leap year.";
    }
    else{
      LeapYear.innerHTML = year + " is not a leap year.";
    }
  }

//   Fibonnaci code
function generateSeries() {
    var n = document.getElementById("term").value;
    if (n === "1") {
      output = [0];
    } else if (n === "2") {
      output = [0, 1];
    } else {
      output = [0, 1];
      for (var i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);
      }
    }
    document.getElementById("series").innerHTML = output
  }

//   Guest
function checkGuest() {
    var guestlist = ["IBRAHIM", "KAWTHAR", "SAMAD", "ENIOLA"];
    var guest = document.getElementById("name").value.toUpperCase();
    if (guestlist.includes(guest)) {
      document.getElementById("message").innerHTML = "Welcome to the party, " + guest + "!";
    } else {
      document.getElementById("message").innerHTML = "Go away " + guest + ", your Atenu is too much.";
    }
  }