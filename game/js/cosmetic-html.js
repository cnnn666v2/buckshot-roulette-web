// ====================== //
// This script is intended for cosmetic changes to html
// like suddenly bigger table about round information
// ====================== //

//------------------------------------------------------------//
// Display a panel to allow user to roll an item
function display_itemPick() {
    itemPanel.style.display = "flex";

    pickBtn.disabled = false;
    pickBtn.classList.remove("cursor-not-allowed");
}

// Hide the panel
function hide_itemPick() {
    itemPanel.style.display = "none";

    setTimeout(changeHPScale, 1300);
}
//------------------------------------------------------------//
// Open panel with a result of a rolled item
function openGambleResult() {
    recieveItem.style.display = "flex";
}

// Close panel with a result of a rolled item
function closeGambleResult() {
    recieveItem.style.display = "none";

    pickBtn.disabled = false;
    pickBtn.classList.remove("cursor-not-allowed");
}
//------------------------------------------------------------//
// Decrease the scale of round info panel
function changeRPScale() {
    roundPanel.style.scale = 1;
    table.classList.remove("basis-8/12");
    table.classList.add("basis-3/4");

    setTimeout(display_itemPick, 2000); // allow the player to roll items
}

// Increase the scale of HP Panel
function changeHPScale() {
    statsPanel.style.scale = 1.8;
    table.classList.remove("basis-3/4");
    table.classList.add("basis-8/12");

    setTimeout(set_hp, 1000);
    setTimeout(reChangeHPScale, 2800);
}

// Decrease the s  cale of HP Panel
function reChangeHPScale() {
    statsPanel.style.scale = 1;
    table.classList.remove("basis-8/12");
    table.classList.add("basis-3/4");

    setTimeout(load_magazine, 1100);
}
//------------------------------------------------------------//
function displayLoadedShells() {
    // Disable SHOTGUN button
    gunBtn.disabled = true;
    gunBtn.classList.add("cursor-not-allowed");
    gunBtn.style.scale = 0.6;

    // Display shell info TXT and fill it with information
    ammoInfoTxt.textContent = "";
    ammoInfoTxt.classList.remove("hidden");
    ammoInfoTxt.style.scale = 1.3;
    
    for(let i=0;i<TotalLives;i++) {
        ammoInfoTxt.textContent += "1 ";
    }
    for(let i=0;i<TotalBlanks;i++) {
        ammoInfoTxt.textContent +="0 ";
    }

    setTimeout(hideLoadedShells, 3000);
}

function hideLoadedShells() {
    // Enable SHOTGUN button
    gunBtn.disabled = false;
    gunBtn.classList.remove("cursor-not-allowed");
    gunBtn.style.scale = 1;

    // Hide shell info TXT
    ammoInfoTxt.textContent = "";
    ammoInfoTxt.classList.add("hidden");
}
//------------------------------------------------------------//