const time = document.getElementById("time");
const settings = document.getElementById("settings");
const settingsMenu = document.getElementById("settings-menu");

// Time
function showTime() {
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    // 12hr
    h = h % 12 || 12;

    time.innerHTML = h + ":" + addZero(m) + ":" + addZero(s);

    setTimeout(showTime, 1000);
}

function addZero(i) {
    return (i < 10 ? '0' : '') + i;
}

// Settings
settings.onclick = function() {
    settingsMenu.classList.toggle("on");
}

// Background Image
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");
const image5 = document.getElementById("img5");
const image6 = document.getElementById("img6");

image1.onclick = function() {
    document.body.style.backgroundImage = 'url("./images/mist.jpg")';
}

image2.onclick = function() {
    document.body.style.backgroundImage = 'url("./images/mountains.jpg")';
}

image3.onclick = function() {
    document.body.style.backgroundImage = 'url("./images/storm.jpg")';
}

image4.onclick = function() {
    document.body.style.backgroundImage = 'url("./images/space.jpg")';
}

image5.onclick = function() {
    document.body.style.backgroundImage = 'url("./images/igloo.jpg")';
}

image6.onclick = function() {
    document.body.style.backgroundImage = 'url("./images/trees.jpg")';
}

// Run
showTime();

