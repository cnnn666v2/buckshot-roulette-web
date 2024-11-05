// D - stands for Dealer, P - stands for Player
let DealerHP, PlayerHP;
let DHP = document.getElementById("dealer-hp");
let PHP = document.getElementById("player-hp");

let p1, p2, p3, p4;
p1 = document.getElementById("p-1");
p2 = document.getElementById("p-2");
p3 = document.getElementById("p-3");
p4 = document.getElementById("p-4");

const DItems = [];
const PItems = [];

// Only for new round
function set_hp() {
    let i = Math.floor(Math.random() * 5) + 2;
    console.log(i);

    DealerHP = i;
    PlayerHP = i;

    update_hp_txt();
}

function update_hp_txt() {
    DHP.textContent = "";
    PHP.textContent = "";

    for(let i=0;i<DealerHP;i++) {
        DHP.textContent += "⚡";
    }

    for(let i=0;i<PlayerHP;i++) {
        PHP.textContent += "⚡";
    }
}

function update_item_table() {
    p1.textContent = PItems[1];
    p2.textContent = PItems[2];
    p3.textContent = PItems[3];
    p4.textContent = PItems[4];
}