let rolledTxt = document.getElementById("rolled-item");

pickBtn.addEventListener("click", rollItem); 
let i1 = document.getElementById("i-1");
let i2 = document.getElementById("i-2");
let i3 = document.getElementById("i-3");
let i4 = document.getElementById("i-4");

var item;

function rollItem() {
    i1.removeEventListener("click", setItemPlace);
    i2.removeEventListener("click", setItemPlace);
    i3.removeEventListener("click", setItemPlace);
    i4.removeEventListener("click", setItemPlace);

    console.log("=============");
    console.log("Items to roll: " + itemAmount);
    console.log("Item Array Length: " + PItems.length);

    pickBtn.disabled = true;
    pickBtn.classList.add("cursor-not-allowed");

    setItemTxt();

    let allFilled = true;
    for (let i = 1; i <= 4; i++) {
        if (PItems[i] === "" || PItems[i] === undefined) {
            allFilled = false;
            break;
        }
    }

    if(allFilled) {
        itemAmount = 0;
        setTimeout(hide_itemPick, 1000);
    
        pickBtn.disabled = true;
        pickBtn.classList.add("cursor-not-allowed");

    } else if(itemAmount > 0) {
        [i1, i2, i3, i4].forEach(disablePickupI);

        // Number represents an item: 1 - beer, 2 - ciggs, 3 - handcuffs, 4 - knife
        item = Math.floor(Math.random() * (5 - 1) + 1);
        console.log("Rolled item: " + item);
        let itemTxt = "";

        switch(item) {
            case 1:
                itemTxt = "Beer";
                break;
            case 2:
                itemTxt = "Cigarettes";
                break;
            case 3:
                itemTxt = "Handcuffs";
                break;
            case 4:
                itemTxt = "Knife";
                break;
            default:
                itemTxt = "Error Occured";
                break;
        }

        rolledTxt.innerHTML = "You've gotten: " + itemTxt + '<br><span class="text-2xl">Select the item slot:</span>';
        console.log("Items to roll: " + itemAmount);

        i1.addEventListener("click", setItemPlace);
        i1.place = 1;
        i1.addItem = item;

        i2.addEventListener("click", setItemPlace);
        i2.place = 2;
        i2.addItem = item;

        i3.addEventListener("click", setItemPlace);
        i3.place = 3;
        i3.addItem = item;

        i4.addEventListener("click", setItemPlace);
        i4.place = 4;
        i4.addItem = item;

        item = 0;
        itemAmount -= 1;
    }
}

function setItemPlace(evt) {
    if(PItems[evt.currentTarget.place] === undefined) {
        console.log("Place/Item: " + evt.currentTarget.place + "/" + evt.currentTarget.addItem)
        PItems[evt.currentTarget.place] = evt.currentTarget.addItem;
        console.log("Array: " + PItems[1] + " " + PItems[2] + " " + PItems[3] + " " + PItems[4])
        closeGambleResult();
    
        update_item_table();
    
        if(itemAmount == 0) {
            setTimeout(hide_itemPick, 1200);
    
            pickBtn.disabled = true;
            pickBtn.classList.add("cursor-not-allowed");
        }
    } else {
        console.log("Error: " + PItems[evt.currentTarget.place]);
    }
}

function setItemTxt() {
    i1.textContent = PItems[1];
    i2.textContent = PItems[2];
    i3.textContent = PItems[3];
    i4.textContent = PItems[4];
}

// Merge these two into one function?
/*function enableBtnTable(element) {
    element.disabled = false;
    element.classList.remove("cursor-not-allowed");
}*/
function disablePickupI(element) {
    console.log("Element: " + element + " | " + element.textContent);

    if (element.textContent !== "") {
        element.disabled = true;
        element.classList.add("cursor-not-allowed");
    } else {
        element.disabled = false;
        element.classList.remove("cursor-not-allowed");
    }
}