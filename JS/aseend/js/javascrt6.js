var hi = "salom hamaga!";
console.log(hi);

function salomBer(ism,yosh=18) {
    console.log(hi + ". mani ismim" + ism + ".Yoshim:" + yosh);
}

function yoshiniQaytar(age) {
    if(age < 7) {
        return "Siz maktab yoshiga etmagansiz!"
    } else {
        return "Siz maktabga kirgansiz!"
    }
}

var mytext = yoshiniQaytar(12);
console.log(mytext);