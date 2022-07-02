// https://randomuser.me/api/

// JSON
// var list = '[]';

fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(response => {

    var jins = response.results[0].gender=='female'?'Ayol':'Erkak';

    document.querySelector('.first').innerText=response.results[0].name.first;
    document.querySelector('.last').innerText=response.results[0].name.last;
    document.querySelector('.phone').innerText=response.results[0].phone;
    document.querySelector('.email').innerText=response.results[0].email;
    document.querySelector('.gender').innerText=jins;
    document.querySelector('.country').innerText=response.results[0].location.country;
    document.querySelector('.img').src=response.results[0].picture.medium;
});