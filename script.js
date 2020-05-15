// console.log
console.log("The website is running.");

// Alert
window.alert("This is a Alessandra's howework assignment!");

// Page Load
window.onload = (event) => {
    console.log('the page is now loaded.');
  }

// Mouse Click
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {
    if(content.className == "open") {
        content.className = "";
        button.innerHTML = "Read More";
    } else{
        content.className = "open";
        button.innerHTML = "Read Less";
    }
};

// Mouse Over and Mouse Out
function colorChange(obj) {
    if (obj.style.color == 'red') {
        obj.style.color = 'black';
    } else {
        obj.style.color = 'red';
    }
}

// dblclick
const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});