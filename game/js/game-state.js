function next_round() {
    if(Round == 0) { TurnState = "Player"; }

    // Disabe SHOTGUN button
    gunBtn.disabled = true;
    gunBtn.classList.add("cursor-not-allowed");

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

    doSetHP = true;
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
        let shell = Math.floor(Math.random() * 2);
        console.log("Loading shell... (" + shell + ") @ (" + i + ")");
        LoadedShells.push(shell);

        if(shell == 1) { TotalLives += 1; } else { TotalBlanks += 1; }
    }

    // Minimum 1 live per mag
    if(TotalLives == 0) {
        let i = Math.floor(Math.random() * (LoadedShells.length - 1) + 1);
        console.log("Randomised index in LoaedShells: " + i);

        // Set the random Mag index to a live
        LoadedShells[i] = 1;
        TotalBlanks -= 1;
        TotalLives += 1;
    }

    if(TotalBlanks == 0) {
        let i = Math.floor(Math.random() * (LoadedShells.length - 1) + 1);
        console.log("Randomised index in LoaedShells: " + i);

        // Set the random Mag index to a live
        LoadedShells[i] = 0;
        TotalBlanks += 1;
        TotalLives -= 1;
    }

    console.log("Array:", LoadedShells.join(" "));
    console.log("Lives: " + TotalLives);
    console.log("Blanks: " + TotalBlanks);

    displayLoadedShells();
}

gunBtn.addEventListener("click", pickupGun);
function pickupGun() {
    switchTableNames();
}

function changeTurn(skipEnemy) {
    if(TurnState == "Player") {
        if(skipEnemy == true) { 
            TurnState = "Player";

            // Enable butons on table for player
            gunBtn.disabled = false;
            gunBtn.classList.remove("cursor-not-allowed");
            [p1, p2, p3, p4].forEach(enableBtnTable);
        } else {
            TurnState = "Dealer"; 
        }
        console.log("(Changed turn state to: " + TurnState + " | skipEnemy? " + skipEnemy + ")");
    } else if(TurnState == "Dealer") {
        if(skipEnemy == true) {
            TurnState = "Dealer";
        } else { 
            TurnState = "Player";
            
            // Enable butons on table for player
            gunBtn.disabled = false;
            gunBtn.classList.remove("cursor-not-allowed");
            [p1, p2, p3, p4].forEach(enableBtnTable);
        }
        console.log("(Changed turn state to: " + TurnState + " | skipEnemy? " + skipEnemy + ")");
    } else {
        console.log("Error occured! Unknown turn state: " + TurnState);
    }

    currTurnTxt.textContent = "Current turn: " + TurnState;
}