

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
const UITLEG = 3;
var spelStatus = SPELEN;

var vijandX = 600; // x-positie van speler
var vijandY = 600; // y-positie van speler
var vijandX2 = 300;
var vijandY2 = 620;
var vorigeKeerMousePressed = false;

var img; //plaatje
var bg; //achtergrond
var y = 0;

var punten = 0;
var levens = 5;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler

  // vijand 
  if (vijandY < 0) {
    vijandY = (600);
    vijandX = (random(0, 1200));
    levens = levens - 1;
  }
  vijandY = vijandY - 4;
  if (vijandY2 < 0) {
    vijandY2 = (600);
    vijandX2 = (random(0, 1200));
    levens = levens - 1;
  }
  vijandY2 = vijandY2 - 4;

  if (punten >= 20) {
    vijandY = vijandY - 2;
    vijandY2 = vijandY2 - 2;
  }
  if (punten >= 40) {
    vijandY = vijandY - 2;
    vijandY2 = vijandY2 - 2;
  }

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
    vijandY - mouseY > -50 &&
    vorigeKeerMousePressed === false && mouseIsPressed === true) { // muis net ingedrukt
    console.log("botsing");
    punten = punten + 1;
    vijandY = (600);
    vijandX = (random(0, 1200));
  }
  if (vijandX2 - mouseX < 50 &&
    vijandX2 - mouseX > -50 &&
    vijandY2 - mouseY < 50 &&
    vijandY2 - mouseY > -50 &&
    vorigeKeerMousePressed === false && mouseIsPressed === true) { // muis net ingedrukt
    console.log("botsing");
    punten = punten + 1;
    vijandY2 = (600);
    vijandX2 = (random(0, 1200));
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
  image(img, vijandX2 - 50, vijandY2 - 49, 100, 100);
  fill("red");
  ellipse(vijandX2, vijandY2, 10, 10);
  // kogel

  // speler
  ellipse(mouseX, mouseY, 20, 20);

  // punten en health
  textSize(32);
  fill(0, 102, 153);

  text(punten, 20, 60);

  textSize(32);
  fill(0, 102, 153);
  text(levens, 1200, 60);

}


/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (levens === 0) {
    return true;
  }

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
  bg = loadImage('brawlhalla.jpg');
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
    console.log("spelen")
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over")
    textSize(50);
    fill("black");
    text("Game Over", 500, 320);
    text("druk spatie voor starten", 380, 400);
    if (keyIsDown(32)) {
      levens = 5;
      punten = 0;
      vijandY = 600;
      vijandY2 = 620;
      spelStatus = SPELEN;
    }

  }
  if (spelStatus === UITLEG) {
    // teken game-over scherm
    console.log("begin Scherm")
  }
}
