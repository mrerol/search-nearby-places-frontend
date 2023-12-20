document.getElementById('locationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let latitude = document.getElementById('latitude').value;
    let longitude = document.getElementById('longitude').value;
    let radius = document.getElementById('radius').value;
    let maxResultCount = document.getElementById('maxResultCount').value;
    let endpoint = 'http://localhost:8080/places'
        + '?latitude=' + latitude
        + '&longitude=' + longitude
        + '&radius=' + radius
        + '&maxResultCount=' + maxResultCount;
    fetch(endpoint, {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(response => response.json())
        .then(data => {
            let placesDiv = document.getElementById('places');
            placesDiv.innerHTML = '';
            data["places"].forEach(place => {
                let p = document.createElement('p');
                p.textContent = place["displayName"]["text"];
                placesDiv.appendChild(p);
            });
        });
});