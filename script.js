const bill_total= document.querySelector("#bill-total");
const tip_slider = document.querySelector("#tip");
const tip_percentage = document.querySelector("#tip-percentage");
const tip_amount = document.querySelector("#tip-amount");
const total_amount = document.querySelector("#total");

bill_total.addEventListener("change", calculateAmount);
tip_slider.addEventListener("input", calculateAmount);

function calculateAmount() {
    if (isNaN(bill_total.value)) {
        alert("ENTER A VALID INPUT")
    }

    bill_total.value = parseFloat(bill_total.value).toFixed(2);
   
    let bill = parseFloat(document.getElementById("bill-total").value);

    let tip = document.getElementById("tip").value;

    tip_percentage.value = tip;

    let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));

    tip_amount.value = total_tip;

    total_amount.value = parseFloat(bill + total_tip).toFixed(2);
}