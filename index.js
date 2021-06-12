//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = " ";
let numberOfNauts = " ";
let altitude = " ";




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');

startingFuelLevel = input.question('Enter Fuel Level: ');
startingFuelLevel = Number(startingFuelLevel);

/*while (startingFuelLevel < 5000) {
  startingFuelLevel = input.question('INSUFFICIENT FUEL - CHECK FUEL LEVEL! Re-enter Fuel Level: ');
  startingFuelLevel = Number(startingFuelLevel);
}*/
while (startingFuelLevel < 5000 || startingFuelLevel > 30000){
  startingFuelLevel = input.question('INVALID ENTRY - CHECK FUEL LEVEL! Re-enter Fuel Level: ');
  startingFuelLevel = Number(startingFuelLevel);
}
console.log(startingFuelLevel);



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
 
numberOfNauts = input.question('Enter Number of Astronauts: ');
numberOfNauts = Number(numberOfNauts);

while (numberOfNauts < 1 || numberOfNauts > 7) {
  numberOfNauts = input.question('INVALID ENTRY: Re-enter Number of Astronauts: ');
  numberOfNauts = Number(numberOfNauts);
}

console.log(numberOfNauts);
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
