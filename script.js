

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var vijandX = 600; // x-positie van speler
var vijandY = 600; // y-positie van speler
var vorigeKeerMousePressed = false;

var img; //plaatje
var bg; //achtergrond
var y = 0;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler

  // vijand 
if (vijandY < 0){
  vijandY = (600) ;
  vijandX = (random(0, 1200));
}
  vijandY = vijandY - 2.5;

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (vijandX - mouseX < 50 &&
    vijandX - mouseX > -50 &&
    vijandY - mouseY < 50 &&
    vijandY - mouseY > -50 && // muis op target
    vorigeKeerMousePressed === false && mouseIsPressed === true) { // muis net ingedrukt
    console.log("botsing");
    vijandY = (600);
    vijandX = (random(0, 1200));
  }
  vorigeKeerMousePressed = mouseIsPressed;

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  background(29, 0, 245);
  // opdracht: iets met image
  image(bg, 0, 0)
  // vijand
  image(img, vijandX - 50, vijandY - 49, 100, 100);
  fill("red");
  ellipse(vijandX, vijandY, 10, 10);



  // kogel

  // speler
  ellipse(mouseX, mouseY, 20, 20);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * preload
 * functie wordt 1x uitgevoerd voor de setup
 * plaatjes worden hier geladen
 */
function preload() {
  img = loadImage('target.png');
     bg = loadImage('brawlahhalla.jpeg');
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
