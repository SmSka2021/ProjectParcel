"use strict"
const getDay = () => {
     const today = new Date();
     const daysArr = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Пятница",
    "Суббота",
    "Воскресенье",
    ];
    return daysArr[today.getDay()];
     };
    
const day = document.querySelector('.myDay');
day.innerHTML = getDay();  


 function myHello() {
   var hi = document.getElementById("myHello");
   hi.addEventListener("click", () => {document.getElementById("hello").innerHTML = "Привет";});
 }
 function myHello2() {
   var hi2 = document.getElementById("myHello2");
   hi2.addEventListener("click", () => {document.getElementById("hello").innerHTML = "Bonjour";});
 }

 
function myHelloStyle2() {
   var styl = document.getElementById("myHelloStyle2");      
   styl.addEventListener("click", () => {document.getElementById("helloStyle").style.color = "red";});
}

function myHelloStyle() {
   var styll = document.getElementById("myHelloStyle");      
   styll.addEventListener("click", () => {document.getElementById("helloStyle").style.color = "green";});
}

function myHidden() {
   var bt = document.getElementById("bt1");
   bt.addEventListener("click", () => {document.getElementById("imgVisibility").style.visibility = "hidden";});
 }
      
function myVisible() {
 var btt2 = document.getElementById("bt2");
 btt2.addEventListener("click", () => {document.getElementById("imgVisibility").style.visibility = "visible";});
}

function imgLamp() {
  var bt7 = document.getElementById("myLamp");   
  bt7.addEventListener("click", () => {document.getElementById("imgLamp").src = "LampRedBlue.jpg"});
 }

 function imgLamp2() {
  var bt6 = document.getElementById("myLamp2");   
  bt6.addEventListener("click", () => {document.getElementById("imgLamp").src = "LampYellowGreen.jpg"});
 }
 function finish() {
   myHidden();
   myVisible();   
   myHello();
   myHello2();   
   myHelloStyle2();
   myHelloStyle(); 
   imgLamp();
   imgLamp2();
 }
 window.onload =  finish;

 
 
 
 
