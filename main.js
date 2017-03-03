var button = document.getElementById("button");
var wherePlanetsShow = document.getElementById("planets");
var planetBoxes = document.getElementsByClassName("planetBox");

var planets = [
    {
        name:"Mercury",
        url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
    },
    {
        name:"Venus",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
    },
    {
        name:"Earth",
        url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
    },
    {
        name:"Mars",
        url: "http://voices.nationalgeographic.com/files/2014/03/Mars-Hubble.jpg"
    },
    {
        name:"Jupiter",
        url: "http://space-facts.com/wp-content/uploads/jupiter.png"
    },
    {
        name:"Saturn",
        url: "http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg"
    },
    {
        name:"Uranus",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
    },
    {
        name:"Neptune",
        url: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2015/thegasandice.jpg"
    }
];




function showPlanets () {
	wherePlanetsShow.innerHTML = "";
	for (var i=0; i<planets.length; i++) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName hidden"> ${planets[i].name} </div>`;
		newPlanet += `<img class="planetImage" src="${planets[i].url}">`;
		newPlanet += `</div>`
		wherePlanetsShow.innerHTML += newPlanet;
	}
}


function showPlanetName (event) {
	if (event.target.className === "planetImage") {
		console.log("event worked", event);
		console.log("unique ID", event.target.parentNode.id);
		console.log("text?", event.target.previousSibling);
		event.target.previousSibling.classList.remove("hidden");
	}
}



button.addEventListener("mouseenter", showPlanets);

// console.log(planetBoxes);
document.body.addEventListener("click", showPlanetName);


















