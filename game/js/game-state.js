let Round = 0;
let itemAmount;

let roundPanel = document.getElementById("round-info");
let r1 = document.getElementById("r-1");
let r2 = document.getElementById("r-2");
let r3 = document.getElementById("r-3");

let table = document.getElementById("table");

let itemPanel = document.getElementById("pick-item-panel");
let recieveItem = document.getElementById("item-recieve");
let statsPanel = document.getElementById("stats-info");

let pickBtn = document.getElementById("get-item");
let currTurnTxt = document.getElementById("curr-turn");

function next_round() {
    Round++;
    currTurnTxt.textContent = "";

    setTimeout(clear_table, 1000);

    table.classList.remove("basis-3/4");
    table.classList.add("basis-8/12");
    roundPanel.style.scale = 1.8;

    switch(Round) {
        case 1:
            r1.textContent = "◉";
            r2.textContent = "○";
            r3.textContent = "○";
            break;
        case 2:
            r1.textContent = "○";
            r2.textContent = "◉";
            r3.textContent = "○";
            break;
        case 3:
            r1.textContent = "○";
            r2.textContent = "○";
            r3.textContent = "◉";
            break;
        default:
            r1.textContent = "◉";
            r2.textContent = "○";
            r3.textContent = "○";
            break;
    }

    itemAmount = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(itemAmount);

    setTimeout(changeRPScale, 3000);

    DealerHP = 0;
    PlayerHP = 0;

    update_hp_txt();
}

function display_itemPick() {
    itemPanel.style.display = "flex";

    pickBtn.disabled = false;
    pickBtn.classList.remove("cursor-not-allowed");
}
function hide_itemPick() {
    itemPanel.style.display = "none";

    setTimeout(changeHPScale, 1300);
}


pickBtn.addEventListener("click", openGambleResult); 
function openGambleResult() {
    recieveItem.style.display = "flex";
}
function closeGambleResult() {
    recieveItem.style.display = "none";
    pickBtn.disabled = false;
    pickBtn.classList.remove("cursor-not-allowed");
}


function changeRPScale() {
    roundPanel.style.scale = 1;
    table.classList.remove("basis-8/12");
    table.classList.add("basis-3/4");

    setTimeout(display_itemPick, 2000);
}

function changeHPScale() {
    statsPanel.style.scale = 1.8;
    table.classList.remove("basis-3/4");
    table.classList.add("basis-8/12");

    setTimeout(set_hp, 1000);
    setTimeout(reChangeHPScale, 2800);
}
function reChangeHPScale() {
    statsPanel.style.scale = 1;
    table.classList.remove("basis-8/12");
    table.classList.add("basis-3/4");
}