let adjective1 = prompt("Enter an adjective.");
let place1 = prompt("Enter the name of a town.");
let place2 = prompt("Enter the name of a town.");
let verb1 = prompt("Enter the name of a spooky creature");
let adjective2 = prompt("Enter an adjective.");
let friend1 = prompt("Enter the name of a friend");
let color1 = prompt("Enter the name of a friend");
let verb2 = prompt("Enter the name of a verb");
let noun1 = prompt("Enter the name of a noun");
let emotion1 = prompt("Enter the name of a noun");




let story = 
`On a ${adjective1} Halloween night in the${place1}, the crewmates were ${verb1} to
complete their tasks. Suddenly, a ${adjective2} shadow appeared, 
and everyone gasped at the sight of the ${friend1}. 
The crewmates had to **run** fast to avoid being caught!
They gathered in${place2}, where they noticed ${color1} ${noun1} lurking
in the darkness. The air was filled with a  ${emotion1} feeling
as they tried to figure out who the imposter was.`;

In this spooky adventure, who will survive and who will be left behind?
let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
