let list = [
    "file:///C:/Users/User/Desktop/%D0%A3%D1%80%D0%B1%D0%B0%D0%BD%20(Live)%20-%20%D0%91%D0%B0%D1%81%D1%82%D0%B0.m4a",
    "file:///C:/Users/User/Desktop/Elley%20Duhe%20-%20MIDDLE%20OF%20THE%20NIGHT%20(2019)%20MELOVAZ.NET.flac",
    "file:///C:/Users/User/Desktop/%D0%A0%D1%83%D1%81%D0%BB%D0%B0%D0%BD_%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9,_Tural_Everest_%E2%80%94_%D0%9A%D0%B0%D1%80%D0%BC%D0%B0%D0%BD_%23%D0%BF%D1%80%D0%B5%D0%BC%D1%8C%D0%B5%D1%80%D0%B0.mp3",
    "file:///C:/Users/User/Desktop/pablo_mr_lambo_domino_59.mp3"
];

let currentAudioIndex = 0;

let audio = new Audio(list[0]);
let h2 = document.querySelector("h2");

function getName() {
    let soundName = list[currentAudioIndex];
    let splittedName = soundName.split("/");
    h2.innerText = splittedName[splittedName.length-1];
}

function playSound() {
    audio.play();
    document.querySelector('#play').style.display="none";
    document.querySelector('#pause').style.display="block";
    getName();
}

function pauseSound() {
    audio.pause();
    document.querySelector('#play').style.display="block";
    document.querySelector('#pause').style.display="none";
}

function nextSound() {
    currentAudioIndex++;
    if(list[currentAudioIndex] !== undefined) {
        audio.pause();
        audio = new Audio(list[currentAudioIndex]);
        audio.play();
        getName();

    }
}

function prevSound() {
    currentAudioIndex--;
    if(list[currentAudioIndex] !== undefined) {
        audio.pause();
        audio = new Audio(list[currentAudioIndex]);
        audio.play();
        getName();

    }
}