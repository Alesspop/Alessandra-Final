
console.log("The website is running.");


window.alert("Thank you for visiting the Local Talent website!");


window.onload = (event) => {
    console.log('the page is now loaded.');
  }

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


function colorChange(obj) {
    if (obj.style.color == 'red') {
        obj.style.color = 'black';
    } else {
        obj.style.color = 'red';
    }
}


const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});