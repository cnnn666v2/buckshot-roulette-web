NPBtn.addEventListener("click", shoot);
NPBtn.kill = "Player";
NDBtn.addEventListener("click", shoot);
NDBtn.kill = "Dealer";

let currShell; // Create current shell var storing current shell in chamber

function shoot(evt) {
    TurnState = "Player";
    console.log("============");
    console.log("Current Turn: " + TurnState);
    console.log("Kill target: " + evt.currentTarget.kill);

    console.log("Array:", LoadedShells.join(" "));

    currShell = LoadedShells[0]; // Save locally current shell

    if(TurnState == "Player") {
        // Check who player wants to kill
        if(evt.currentTarget.kill == "Player") {
            // Make sure the mag is locked and loaded
            if(LoadedShells[0] != undefined) {
                // Check the shell type (1 - live, 0 - blank)
                if(LoadedShells[0] == 1) {
                    console.log("It's a live round!!");
                    PlayerHP -= 1;
                    LoadedShells.shift();

                    // Hide entire table effect
                    setTimeout(hideEntireTable, 800);
                    setTimeout(showEntireTable, 3400);
                    setTimeout(changeTurn, 4400);
                } else if(LoadedShells[0] == 0) {
                    console.log("It's a blank round!!");
                    LoadedShells.shift();
                    changeTurn(true); // Skip enemy turn if player shoots himself with a blank
                    setTimeout(enableBtnsIf, 4400);
                } else {
                    console.log("Error occured! Unknown shell type: " + LoadedShells[0]);
                }
            }
        } else if(evt.currentTarget.kill == "Dealer") {
            // Make sure the mag is locked and loaded
            if(LoadedShells[0] != undefined) {
                // Check the shell type (1 - live, 0 - blank)
                if(LoadedShells[0] == 1) {
                    console.log("It's a live round!!");
                    DealerHP -= 1;
                    LoadedShells.shift();

                    // Hide dealer's table part
                    setTimeout(hideDealerTable, 800);
                    setTimeout(showEntireTable, 3400);
                    setTimeout(changeTurn, 4400);
                } else if(LoadedShells[0] == 0) {
                    console.log("It's a blank round!!");
                    LoadedShells.shift();
                    changeTurn();
                } else {
                    console.log("Error occured! Unknown shell type: " + LoadedShells[0]);
                }
            }
        } else {
            console.log("Error occured! Unknown kill target: " + evt.currentTarget.kill);
        }

        reverseTableNames(); // Enable table items again

        // Check if either is dead
        if( DealerHP <= 0 || PlayerHP <= 0) {
            setTimeout(changeHPSN, 4000); // Increase scal of HP panel + update text
            setTimeout(checkDeath, 8000);
        } else {
            setTimeout(changeHPSN, 4000); // Increase scal of HP panel + update text
        }

        // Disable butons on table for player
        gunBtn.disabled = true;
        gunBtn.classList.add("cursor-not-allowed");
        [p1, p2, p3, p4].forEach(disableBtnTable);
    }

    console.log("Upated array:", LoadedShells.join(" "));
    
    // If the mag is empty load a new one
    if(LoadedShells.length == 0) {
        itemAmount = Math.floor(Math.random() * (5 - 1) + 1); // Max - 4, Min - 1
        console.log("Item Amount: " + itemAmount);

        doSetHP = false;
        setTimeout(display_itemPick, 7600);
    }
}