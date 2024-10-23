let adjective1 = prompt("Enter an adjective.");
let creature = prompt("Enter the name of a spooky creature");
let bodypart = prompt(" Enter the name of a body part.");
let adjective2 = prompt("Enter an adjective.");
let friend1 = prompt("Enter the name of a friend");
let friend2 = prompt("Enter the name of a friend");
let adjective3 = prompt("Enter an adjective.");
let adjective4 = prompt("Enter an adjective.");
let creature2 = prompt("Enter the name of a spooky creature");



let story = 
`One ${adjective1} night while ${friend1} and ${friend2} were walking around on Halloween night, they were ambushed by a ${adjective2} dog that had ${adjective3}

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
