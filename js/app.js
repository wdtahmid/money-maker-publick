

function totalExpenses() {

    const message = "Please, input a valid number greater then 0.";
    const expenseMessage = "Please, check your input items, there may be any issue.";
    const balanceMessage = 'It is not possibale to balance something.';
    const totalExpenseMessage = 'Your expense is over of your income.';


    const saveButton = document.getElementById('save');

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


    const totalExpenses = getFoodInput + getRentInput + getClothesInput;
    const totalBalance = getIncomeInput - totalExpenses;


    if (totalBalance > 0) {
        document.getElementById('balance').innerText = totalBalance;
    }

    else if (totalBalance < 0) {
        document.getElementById('balance-message').innerText = balanceMessage;
        document.getElementById('balance').innerText = '00';
        //saveButton.setAttribute('disabled', true)
    }


    if (totalExpenses > getIncomeInput) {
        document.getElementById('expense-message').innerText = totalExpenseMessage;
    }

    else {
        document.getElementById('expense-message').innerText = '';
        document.getElementById('balance-message').innerText = '';
    }





    if (isNaN(totalBalance) == true) {
        document.getElementById('balance').innerText = '00';
    }

    if (isNaN(totalExpenses) == true) {
        document.getElementById('total-expenses').innerText = '00';
    }
    else {
        document.getElementById('total-expenses').innerText = totalExpenses;
    }

    return totalBalance;
}

function getRemainingBalance(totalBalance) {
    const getSaveInput = document.getElementById('input-save').value;
    const saveInputMessage = "It is not possible! keep the % below or equal to 100";

    if (totalBalance > 0) {
        if (getSaveInput <= 100) {

            const savingAmount = totalBalance / 100 * getSaveInput;

            const remainingBalance = totalBalance - savingAmount;


            if (isNaN(savingAmount) == true && isNaN(remainingBalance) == true) {
                document.getElementById('saving-amount').innerText = '00';
                document.getElementById('remaining-balance').innerText = '00';

            } else {

                document.getElementById('saving-amount').innerText = savingAmount;
                document.getElementById('remaining-balance').innerText = remainingBalance;
            }
        }
        else {
            document.getElementById('save-input-message').innerText = saveInputMessage;
        }
    } else {
        saveButton.setAttribute('disabled', true)
    }






}

document.getElementById('calculate-btn').addEventListener('click', function () {
    totalExpenses();
});

document.getElementById('save').addEventListener('click', function () {
    const totalBalance = totalExpenses();
    const saveButton = totalExpenses();
    getRemainingBalance(totalBalance, saveButton);

})