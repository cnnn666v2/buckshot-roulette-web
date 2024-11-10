// This item heals up player
function use_ciggs() {
    console.log("=========");
    console.log("Turn: " + TurnState);
    console.log("Used item: ciggs");

    if(TurnState == "Player") {
        // Increase health by 1 if Player's HP is
        // lower than originaly assigned HP
        if(PlayerHP < totalHP) {
            console.log("Current HP: " + PlayerHP);
            PlayerHP++;
            console.log("Updated HP: " + PlayerHP);
        } else {
            console.log("Added none HP, it's full! :D // HP: " + PlayerHP);
        }
    }
}

// This item ejects current shell
function use_beer() {
    console.log("=========");
    console.log("Turn: " + TurnState);
    console.log("Used item: beer");

    if(TurnState == "Player") {
        // Eject shell in chamber
        console.log("Loaded shell: " + LoadedShells[0] + " // " + LoadedShells.length);
        let localShell = LoadedShells[0];
        LoadedShells.shift();
        console.log("Updated chamber: " + LoadedShells[0] + " // " + LoadedShells.length + " // Ejected: " + localShell);
    }
}

// This item sets the dmg to 2
function use_knife() {
    console.log("=========");
    console.log("Turn: " + TurnState);
    console.log("Used item: knife");

    if(TurnState == "Player") {
        console.log("Current dmg: " + gunDamage);
        gunDamage = 2;
        console.log("New dmg: " + gunDamage);
    }
}

// This item skips dealer's next turn no matter what
function use_handcuffs() {
    console.log("=========");
    console.log("Turn: " + TurnState);
    console.log("Used item: handcuffs");

    if(TurnState == "Player") {
        console.log("Turns left: " + turnsLeft);
        turnsLeft = 2; // Set turnsLeft to 2 so player has additional shot
        console.log("Updated turns left: " + turnsLeft);
    }
}

function use_adrenaline() {}
function use_inverter() {}
function use_pills() {}