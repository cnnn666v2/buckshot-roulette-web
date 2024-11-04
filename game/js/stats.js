// D - stands for Dealer, P - stands for Player
let DealerHP, PlayerHP;
let DHP = document.getElementById("dealer-hp");
let PHP = document.getElementById("player-hp");

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

