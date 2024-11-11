function next_round() {
    if(Round == 0) { TurnState = "Player"; }

    // Disabe SHOTGUN button
    gunBtn.disabled = true;
    gunBtn.classList.add("cursor-not-allowed");
    turnsLeft = 1;
    gunDamage = 1;

    Round++;
    currTurnTxt.textContent = "";
    ejectShellTxt.textContent = "";

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
    let max = 0; // Max number of shells in mag

    // Determine the max amount of shells inside mag
    if(totalHP * 2 > 8) {
        max = 8; // if totalHP*2 is greater than 8, then max shells should be 8
    } else {
        max = totalHP * 2; // or if 8 is greater than totalHP*2, then set it to totalHP*2
    }

    console.log("Max shells: " + max);
    let totalShells = Math.floor(Math.random() * ((max + 1) - 2) + 2); // Max - 8, Min - 2
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
    gunDamage = 1;

    if(TurnState == "Player") {
        if(skipEnemy == true) { 
            TurnState = "Player";

            // Enable butons on table for player
            /*gunBtn.disabled = false;
            gunBtn.classList.remove("cursor-not-allowed");
            [p1, p2, p3, p4].forEach(enableBtnTable);*/
        } else {
            // Dont change turn if player has more than 1 try
            if(turnsLeft <= 1) {
                TurnState = "Dealer"; 
            } else {
                TurnState = "Player";
                turnsLeft -= 1;
            }
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
    ejectShellTxt.textContent = "Ejected shell: " + currShell;
}

function use_items(item_use, button) {
    console.log("========");
    console.log("Item_use: " + item_use);
    switch(item_use) {
        case 1:
            use_beer();
            break;
        case 2:
            use_ciggs();
            break;
        case 3:
            use_handcuffs();
            break;
        case 4:
            use_knife();
            break;
        default:
            console.log("Error occured: use_items() // item is: " + item_use);
            break;
    }

    button.textContent = "";
    button.disabled = true;
    button.classList.add("cursor-not-allowed");
}