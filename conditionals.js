const raining = true;
const temperature = -12;



// Clothing recommendation
(temperature < 0) ? console.log("Make sure you pick out a scarf!") : 
(temperature < 15) ? console.log("Short sleeves won't cut it!") :
console.log("Short sleeves are fine.");

// Umbrella recommendation
  raining ? console.log("Don't forget your umbrella!") 
  : console.log("Leave your umbrella at home!");
  
// hospitable conditions check
  (temperature < -40 || temperature > 40) ? console.log("Maybe going outside isn't such a great idea...") 
  : console.log("Now you're ready to go outside!");

