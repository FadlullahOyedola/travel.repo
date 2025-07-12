let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterhealth;
let inventory =["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("text");
const xptext = document.querySelector("#xp");
const healthtext = document.querySelector("#healthtext");
const goldtext = document.querySelector("#goldtext");
const monsterstats = document.querySelector("#monsterstats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterhealthtext = document.querySelector("#monsterhealthtext");

// initialize button

button1= gotostore;
 button2.onclick= goCave;
 button3.onclick= fightDragon;

 function gotostore(){
    console.log("Going to store.")
 }

 function goCave(){
    console.log("Going to Cave.")
 }

 function fightDragon(){
    console.log("Fighting Dragon.")
 }
