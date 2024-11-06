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