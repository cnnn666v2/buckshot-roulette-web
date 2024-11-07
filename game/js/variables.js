// ====================== //
// Player/Dealer stats
// ====================== //
// D - stands for Dealer, P - stands for Player
let totalHP;
let DealerHP, PlayerHP;
const DItems = [];
const PItems = [];

// ====================== //
// Game tracker
// ====================== //
let Round = 0;
let itemAmount; // Amount of items to pickup during the pickup phase

const LoadedShells = []; // Array which stores currently loaded shells
let TotalLives = 0, TotalBlanks = 0; // Diferentiate lives and blanks in mag

// ====================== //
// Asign HTML elements to different variables
// ====================== //
// D - stands for Dealer, P - stands for Player
let DHP = document.getElementById("dealer-hp");
let PHP = document.getElementById("player-hp");

let table = document.getElementById("table");
let roundPanel = document.getElementById("round-info"); // Entire table for the current round info

let itemPanel = document.getElementById("pick-item-panel"); // Fullscreen item that pops up during pickup phase
let recieveItem = document.getElementById("item-recieve"); // Panel inside itemPanel that alows player to choose item slot
let statsPanel = document.getElementById("stats-info"); // Table of dealer's and player's hp

let pickBtn = document.getElementById("get-item"); // Button inside itemPanel meant for giving a random item to the player
let currTurnTxt = document.getElementById("curr-turn");

let gunBtn = document.getElementById("weapon-btn"); // Button to shoot yourself or dealer
let ammoInfoTxt = document.getElementById("loaded-ammo"); // Text to display shell info in current "round-load"

let p1, p2, p3, p4; // "p" is for the buttons on the player's side of table
p1 = document.getElementById("p-1");
p2 = document.getElementById("p-2");
p3 = document.getElementById("p-3");
p4 = document.getElementById("p-4");

let rolledTxt = document.getElementById("rolled-item");

let i1, i2, i3, i4; // "i" is for the buttons during the pickup items phase
i1 = document.getElementById("i-1");
i2 = document.getElementById("i-2");
i3 = document.getElementById("i-3");
i4 = document.getElementById("i-4");

// r1, r2, r3 are fields inside columns, they represent current round state
let r1 = document.getElementById("r-1");
let r2 = document.getElementById("r-2");
let r3 = document.getElementById("r-3");