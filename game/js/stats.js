// Only for new round
function set_hp() {
    totalHP = 0;
    totalHP = Math.floor(Math.random() * 5) + 2;
    console.log("(Rolled health: " + totalHP + " )");

    DealerHP = totalHP;
    PlayerHP = totalHP;

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
    [p1, p2, p3, p4].forEach(enableBtnTable);

    p1.textContent = PItems[1];
    p2.textContent = PItems[2];
    p3.textContent = PItems[3];
    p4.textContent = PItems[4];

    [p1, p2, p3, p4].forEach(disableBtnTable);
}

function clear_table() {
    DItems.length = 0;
    PItems.length = 0;

    update_item_table();
}