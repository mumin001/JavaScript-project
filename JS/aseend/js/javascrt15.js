// console.log(document.createElement('span'));
var span = document.createElement('span');
span.innerText = 'uyga vazifa!';
span.classList.add('homework');
console.log(span);

var a = document.createElement('a');
a.innerText = 'Bosh sahifa';
a.href = 'https://t.m/HumoDigital';
a.classList.add('link');
span.style.color = 'blue';
span.style.backgroundColor = 'grey';
console.log(a);

var p = document.createElement('p');
p.innerText = 'Huquqlar himoyalangan!';
console.log(p);


var div = document.querySelector('div');
div.appendChild(p);
div.appendChild(span);
div.appendChild(a);

setTimeout(function() {
    p.remove();
}, 3000);