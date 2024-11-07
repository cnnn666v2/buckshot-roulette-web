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
        if(evt.currentTarget.kill == "Player") {
            if(LoadedShells[0] != undefined) {
                if(LoadedShells[0] == 1) {
                    console.log("It's a live round!!");
                    PlayerHP -= 1;
                    LoadedShells.shift();
                } else if(LoadedShells[0] == 0) {
                    console.log("It's a blank round!!");
                    LoadedShells.shift();
                } else {
                    console.log("Error occured! Unknown shell type: " + LoadedShells[0]);
                }
            }
        } else if(evt.currentTarget.kill == "Dealer") {
            if(LoadedShells[0] != undefined) {
                if(LoadedShells[0] == 1) {
                    console.log("It's a live round!!");
                    DealerHP -= 1;
                    LoadedShells.shift();
                } else if(LoadedShells[0] == 0) {
                    console.log("It's a blank round!!");
                    LoadedShells.shift();
                } else {
                    console.log("Error occured! Unknown shell type: " + LoadedShells[0]);
                }
            }
        } else {
            console.log("Error occured! Unknown kill target: " + evt.currentTarget.kill);
        }
    }

    console.log("Upated array:", LoadedShells.join(" "));
}