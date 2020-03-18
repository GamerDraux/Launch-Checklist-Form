let formSubmit = "";

window.addEventListener('load', function(){
   console.log ('window loaded');
   formSubmit = document.getElementById('formSubmit');
   formSubmit.addEventListener('click', function(){
      validateEntries();
   });
});

function validateEntries(){
   console.log ('validateEntries function fired');
   
   // setting items needed to validate entries
   let pilotName = document.getElementById('pilotName');
   let copiolotName = document.getElementById('copilotName');
   let fuelLevel = document.getElementById('fuelLevel');
   let cargoMass = document.getElementById('cargoMass');

   // validation scripts
   if (pilotName.value === ""||copiolotName.value===""||fuelLevel.value===""||cargoMass.value===""){
      alert ('Please make sure to fill out all boxes');
      event.preventDefault();
   }else if (!(isNaN(parseInt(pilotName.value)))||!(isNaN(parseInt(copiolotName.value)))){
      alert ('Please make certain to use a valid string in the name fields (numbers are not valid names)');
      event.preventDefault();
   }else if (isNaN(parseInt(fuelLevel.value))||isNaN(parseInt(cargoMass.value))){;
       alert ('Please make certain to enter numerical values in the Fuel Level and Cargo Mass fields');
       event.preventDefault();
   } else {

      // once entries have been validated, setting the names of the pilot and copilot
      let pilotStatus = document.getElementById('pilotStatus');
      pilotStatus.innerHTML=(`Pilot Ready: ${pilotName.value}`);
      console.log (pilotStatus.innerHTML);
      let copilotStatus = document.getElementById('copilotStatus');
      copilotStatus.innerHTML = (`Co-Pilot Ready: ${copiolotName.value}`);
      console.log (copilotStatus.innerHTML);

      // getting elements needed for setting mission status
      let faultyItems=document.getElementById('faultyItems');
      let launchStatus=document.getElementById('launchStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let fuelStatus=document.getElementById('fuelStatus');

      // mission status checkers
      if (parseInt(fuelLevel.value)<10000){
         faultyItems.style.visibility="visible";
         fuelStatus.innerHTML=`Fuel level insufficient for mission!  Mission success requires 10000L of fuel, current fuel level: ${fuelLevel.value}L.`;
         fuelStatus.style.backgroundColor="yellow";
         launchStatus.style.color="red";
         launchStatus.innerHTML="Shuttle not ready for launch"
         event.preventDefault();
      }
      if (parseInt(cargoMass.value)>10000){
         faultyItems.style.visibility="visible";
         cargoStatus.innerHTML=`Cargo mass too high for launch!  Launch success requires cargo mass of less than 10000Kg, current cargo mass: ${cargoMass.value}Kg.`;
         cargoStatus.style.backgroundColor="yellow";
         launchStatus.style.color="red";
         launchStatus.innerHTML="Shuttle not ready for launch";
         event.preventDefault();
      }
      if (parseInt(cargoMass.value)<=10000&&parseInt(fuelLevel.value)>=10000){
         faultyItems.style.visibility="visible"
         launchStatus.style.color="green";
         launchStatus.innerHTML="Shuttle is ready for launch";
         fuelStatus.style.backgroundColor="#ECF0F1";
         fuelStatus.innerHTML="Fuel level high enough for launch";
         cargoStatus.style.backgroundColor="#ECF0F1";
         cargoStatus.innerHTML="Cargo mass low enough for launch";
         // next line is to see the results.  comment it out once the full app is set.
         event.preventDefault();
      }


   }
}





/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
