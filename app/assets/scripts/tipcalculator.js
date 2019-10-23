function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
    alert("please enter values");
    return;
    }
    
    // check to see if this input is empty, or <= 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "inline-block";
    }

    // calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    // round to two decimal places
    total = Math.round(total * 100) / 100;
    // always keep two digits after decimal
    total = total.toFixed(2);
    // display the tip amount
    document.getElementById("totalTip").style.display = "block";

    // calculate total bill amount
    var totalBill = parseFloat(billAmt) + parseFloat(total);
    totalBill = Math.round(totalBill * 100) / 100;
    totalBill = totalBill.toFixed(2);
    document.getElementById("total").innerHTML = totalBill;
    document.getElementById("tip").innerHTML = total;
};

// hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// change color scheme on tip amount
function getSelectedValue() {
    var selectedValue = document.getElementById("serviceQual").value;
    
    if (selectedValue === "0.3") {
        document.getElementById("headline").classList.add("gold");
    } else {
        if (selectedValue === "0.2") {
            document.getElementById("headline").classList.add("silver");
        } else {
            if (selectedValue === "0.1") {
                document.getElementById("headline").classList.add("bronze");
            } else {
                if (selectedValue === "0.05") {
                    document.getElementById("headline").classList.add("grey");
                }
            }
        }
    }
}


// click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
