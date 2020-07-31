const click = document.querySelector('button');
const billTotal = document.querySelector('input.total');
const people = document.querySelector('input.people');

click.addEventListener('click', calculate);
var tipH2, totalPersonH2, secondData = false;

function calculate() {

    var numPeople = people.value;
    var numTotal = billTotal.value;

    people.value = "";
    billTotal.value = "";
    if (numPeople && numTotal) {

        var totalTip = (numTotal * 0.15) / numPeople;
        var totalPerson = (numTotal * 1.15) / numPeople;
        if (secondData) {
            tipH2.remove();
            totalPersonH2.remove();
        }
        displayTip(totalTip, totalPerson, numTotal);
    } else {
        alert("Introduce the total bill and the number of people");

    }
}

function displayTip(tip, total, totalBill) {

    tipH2 = document.createElement('h2');

    tipH2.textContent = "You should tip " + tip + " per person on " + totalBill + " $ bill";
    document.body.insertBefore(tipH2, billTotal);


    totalPersonH2 = document.createElement('h2');
    totalPersonH2.textContent = "You would pay " + total + " per person on " + totalBill + " $ bill";
    document.body.insertBefore(totalPersonH2, billTotal);
    secondData = true;
}