const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://soa.smext.faa.gov/asws/api/airport/delays', true);
request.responseType = "json"
request.onload = function () {

  // Begin accessing JSON data here

  var data = this.response;
  if (request.status >= 200 && request.status < 400) {
	data.GroundDelays.groundDelay.forEach(delayed => {
	//
	// Create a div with a card class
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

    // Create an h1 and set the text content to the film's title
		const h1 = document.createElement('h1');
		h1.textContent = delayed.airport;

    // Create a p and set the text content to the film's description
		const p = document.createElement('p');
		p.textContent = delayed.avgTime + " due to " + delayed.reason;

    // Append the cards to the container element
		container.appendChild(card);

    // Each card will contain an h1 and a p
		card.appendChild(h1);
		card.appendChild(p);
	
	//
	});
  } else {
    const errorMessage = document.write('Connection Error - Please Try Again Later');
    app.appendChild(errorMessage);
  }  
}
request.send();