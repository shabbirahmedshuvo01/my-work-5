document.getElementById("final-calc").addEventListener('click', function () {
    const incomeText = document.getElementById('income-calc');
    const income = parseFloat(incomeText.value);
    const foodText = document.getElementById('food-calc');
    const food = parseFloat(foodText.value)
    const rentText = document.getElementById('rent-calc');
    const rent = parseFloat(rentText.value);
    const clothText = document.getElementById('cloth-calc');
    const cloth = parseFloat(clothText.value);
    const spendAmount = food + rent + cloth;
    const totalCostText = document.getElementById('total-spend');
    const totalCost = parseFloat(totalCostText.innerText);
    totalCostText.innerText = spendAmount;
    let amountHave = income - spendAmount;
    const totalSpendtext = document.getElementById('valid-amount');
    let finalAmount = parseFloat(totalSpendtext.innerText);
    totalSpendtext.innerText = amountHave;
})

document.getElementById('saving-work').addEventListener('click', function () {
    const incomeText = document.getElementById('income-calc');
    const income = parseFloat(incomeText.value);
    const mySaveText = document.getElementById('saving-input');
    const mySave = parseFloat(mySaveText.value);
    const savingField = (income / 100) * mySave;
    const savingHaveText = document.getElementById('save-calc');
    const savingHave = parseFloat(savingHaveText.innerText);
    savingHaveText.innerText = savingField;
    const finalBalanceText = document.getElementById('balace-calc');
    const finalBalance = parseFloat(finalBalanceText.innerText);
    finalBalanceText.innerText = income - savingField;
})