// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let dateLaunch = 'Monday 2019-03-18';
let astronautCount = 7;
let timeOfLaunch = '10:05:34 AM';
let astronautStatus = 'ready';
let averageAstronautMassKg =	80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000;
let shuttleMassKg =	74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius =	-225;
let fuelLevel = '100%';
let weatherStatus = 'clear';


// Write code to generate the LC04 report here:
console.log('------------------------------------');
console.log("> LC04 - Launch Checklist");
console.log('------------------------------------');
console.log('Date: ' + dateLaunch);
console.log('Time: ' + timeOfLaunch);
console.log("\n");
console.log('------------------------------------');
console.log('> ASTRONAUT INFO');
console.log('------------------------------------');
console.log(String("* count: " +  astronautCount));
console.log(String("* status: " +  astronautStatus));
console.log("\n");
console.log('------------------------------------');
console.log('> FUEL DATA');
console.log('------------------------------------');
console.log(String("* Fuel temp celsius: " + fuelTempCelsius + " C" ));
console.log(String("* Fuel level: " + fuelLevel));
console.log("\n");
console.log('------------------------------------');
console.log('> MASS DATA');
console.log('------------------------------------');
console.log(String("* Crew mass: " + crewMassKg + " kg"));
console.log(String("* Fuel mass: " + fuelMassKg +" kg"));
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg" );
console.log("\n");
console.log('------------------------------------');
console.log('> FLIGHT PLAN');
console.log('------------------------------------')
console.log("* weather: "  + weatherStatus )
console.log("\n")
console.log('------------------------------------');
console.log('> OVERALL STATUS');
console.log('------------------------------------')
console.log("* Clear for takeoff: YES"  )


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.