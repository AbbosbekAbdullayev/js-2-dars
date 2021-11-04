var text = document.querySelector('.text')
var alisher = Number(prompt("Alisher yoningda qancha pul bor"))

var sum = 9433.34;
var yevro = 10354.03;
var hotel = 250;
var muzey = 120;
var bilet = 500;

var bletnarx = sum * bilet;
var hotelnarx = sum * hotel;
var muzeynarx = yevro * muzey;

var umumiy = bletnarx + hotelnarx + muzeynarx;

if(alisher >= umumiy){
    text.textContent = "Oq yol alisher puling yetar ekan👍"
}else {
    text.textContent = "Alisher ozgina pul topla puling yetmas ekan😩"
}
console.log(text)