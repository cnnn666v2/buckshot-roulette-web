NPBtn.addEventListener("click", shoot);
NPBtn.kill = "Player";
NDBtn.addEventListener("click", shoot);
NDBtn.kill = "Dealer";

function shoot(evt) {
    TurnState = "Player";
    console.log("============");
    console.log("Current Turn: " + TurnState);
    console.log("Kill target: " + evt.currentTarget.kill);

    console.log("Array:", LoadedShells.join(" "));

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
                    changeTurn();
                } else if(LoadedShells[0] == 0) {
                    console.log("It's a blank round!!");
                    LoadedShells.shift();
                    changeTurn(true); // Skip enemy turn if player shoots himself with a blank
                    setTimeout(enableBtnsIf, 2800);
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
                    changeTurn();
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
        changeHPSN(); // Increase scal of HP panel + update text

        // Disable butons on table for player
        gunBtn.disabled = true;
        gunBtn.classList.add("cursor-not-allowed");
        [p1, p2, p3, p4].forEach(disableBtnTable);
    }

    console.log("Upated array:", LoadedShells.join(" "));
}