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

    itemAmount = Math.floor(Math.random() * (5 - 1) + 1); // Max - 4, Min - 1
    console.log(itemAmount);

    setTimeout(changeRPScale, 3000);

    DealerHP = 0;
    PlayerHP = 0;

    update_hp_txt();
}

function load_magazine() {
    console.log("=========");
    console.log("Total HP: " + totalHP);
    LoadedShells.length = 0; // clear the mag
    let totalShells = Math.floor(Math.random() * ((totalHP + 1) - 2) + 2); // Max - 8, Min - 2
    console.log("Total Shells: " + totalShells);

    TotalLives = 0,
    TotalBlanks = 0;

    for(let i=1;i<=totalShells;i++) {
        let shell = Math.floor(Math.floor(Math.random() * 2));
        console.log("Loading shell... (" + shell + ") @ (" + i + ")");
        LoadedShells.push(shell);

        if(shell == 1) { TotalLives += 1; } else { TotalBlanks += 1; }
    }

    console.log("Array:", LoadedShells.join(" "));
    console.log("Lives: " + TotalLives);
    console.log("Blanks: " + TotalBlanks);

    displayLoadedShells();
}