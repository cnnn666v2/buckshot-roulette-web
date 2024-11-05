let Round = 0;
let itemAmount;

let roundPanel = document.getElementById("round-info");
let r1 = document.getElementById("r-1");
let r2 = document.getElementById("r-2");
let r3 = document.getElementById("r-3");

let table = document.getElementById("table");

let itemPanel = document.getElementById("pick-item-panel");
let recieveItem = document.getElementById("item-recieve");

let pickBtn = document.getElementById("get-item");

function next_round() {
    Round++;

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
}

function display_itemPick() {
    itemPanel.style.display = "flex";

    pickBtn.disabled = false;
    pickBtn.classList.remove("cursor-not-allowed");
}
function hide_itemPick() {
    itemPanel.style.display = "none";
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