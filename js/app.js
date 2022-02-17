

document.getElementById('calculate-btn').addEventListener('click', function () {

    const message = "Please, input a valid number greater then 0.";
    const expenseMessage = "Please, check your input items, there may be any issue.";

    let getIncomeInput = parseInt(document.getElementById('input-income').value);

    let getFoodInput = parseInt(document.getElementById('input-food').value);
    let getRentInput = parseInt(document.getElementById('input-rent').value);
    let getClothesInput = parseInt(document.getElementById('input-clothes').value);

    if (isNaN(getIncomeInput) == true || getIncomeInput.value == '') {
        document.getElementById('income-message').innerText = message;
    }
    else {
        document.getElementById('income-message').innerText = '';
    }

    if (isNaN(getFoodInput) == true || getFoodInput.value == '') {
        document.getElementById('food-message').innerText = message;
    }
    else {
        document.getElementById('food-message').innerText = '';
    }

    if (isNaN(getRentInput) == true || getRentInput.value == '') {
        document.getElementById('rent-message').innerText = message;
    }
    else {
        document.getElementById('rent-message').innerText = '';
    }

    if (isNaN(getClothesInput) == true || getClothesInput.value == '') {
        document.getElementById('clothes-message').innerText = message;
    }
    else {
        document.getElementById('clothes-message').innerText = '';
    }

    console.log(getRentInput);
    console.log(typeof (getRentInput));


    const totalExpenses = getFoodInput + getRentInput + getClothesInput;
    const totalBalance = getIncomeInput - totalExpenses;

    if (isNaN(totalBalance) == true) {
        //document.getElementById('balance-message').innerText = expenseMessage;
        document.getElementById('balance').innerText = '00';
    }
    else {
        document.getElementById('balance').innerText = totalBalance;
    }

    if (isNaN(totalExpenses) == true) {
        //document.getElementById('balance-message').innerText = expenseMessage;
        document.getElementById('total-expenses').innerText = '00';
    }
    else {
        document.getElementById('total-expenses').innerText = totalExpenses;
    }


});