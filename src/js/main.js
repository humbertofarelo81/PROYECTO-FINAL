const URL = 'https://randomuser.me/api/';
const PARAMETERS = '?nat=br,es,mx,us&noinfo';

function changePageData(response) {
    changeName(response.name);
    changeImage(response.picture.large);
    changeAboutMe(response);
    changeContactInfo(response);
}

try {
    fetch(URL + PARAMETERS)
        .then(response => response.json())
        .then(response => {
            let responseData = response.results[0];
            changePageData(responseData);
        });
} catch (error) { console.error(error); }



function changeContactInfo(response) {
    document.querySelector('#celular').textContent += `${response.cell}`

    document.querySelector('#telefono').textContent += `${response.phone}`

    document.querySelector('#email').textContent += `${response.email}`
}

function changeAboutMe(response) {
    document.querySelector('#direccion').textContent +=
        `${response.location.country}. ` + `${response.location.state}, ` + `${response.location.city}`

    
    document.querySelector('#genero').textContent += `${response.gender}`.charAt(0).toUpperCase() + `${response.gender}`.slice(1);

    document.querySelector('#edad').textContent += `${response.dob.age}`

    document.querySelector('#birthdate').textContent += `${response.dob.date.split('T')[0]}`
}

function changeName(name) {
    document.querySelector('#name').textContent = `${name.first} ` + `${name.last}`;
}

function changeImage(imageSource) {
    document.querySelector('img').src = imageSource;
}