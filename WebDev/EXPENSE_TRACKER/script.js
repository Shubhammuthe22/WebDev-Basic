// const { createElement } = require("react");

document.addEventListener("DOMContentLoaded" , () =>{
     const expenseForm = document.getElementById("expense-form");
     const expenseNameInput = document.getElementById("expense-name");
     const expenseAmountInput = document.getElementById("expense-amount");
     const expenseListDisplay = document.getElementById("expense-list");
     const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalAmount = calculateTotal();

    renderExpenses();
    // calling this method here is used to render the stored content everytime.
    
    expenseForm.addEventListener('submit' , (e) =>{
        e.preventDefault(); //It is used to prevent the default activities that can occur in an event.
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());
        //parseFloat is used to convert the given Amount Input into Num datatype,
        // because by default it is stored as a string datatype.

        if(name!== "" && !isNaN(amount) && amount > 0){
           
            const newExpense = {
                id:Date.now(),
                name: name,
                amount: amount
            }
            expenses.push(newExpense);
            saveToLocal();
            renderExpenses();
            updateTotal();
        }
        //clear input;
        //The values should be cleared once it is submitted.
        expenseNameInput.value = "";
        expenseAmountInput.value = "";

    });

    function renderExpenses (){
        expenseListDisplay.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `${expense.name} - ₹${expense.amount}
            <button data-id="${expense.id}" >Delete</button>`;
            expenseListDisplay.appendChild(li);
        });
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
        //toFixed is a method to limit the output after the decimal
    }


    function saveToLocal(){
        localStorage.setItem("expenses" , JSON.stringify(expenses));
    }
    function calculateTotal (){
        return expenses.reduce((sum , expense) => (sum + expense.amount),0);
        //reduce is a method in js to iterate through a array and calculate the sum of a array.
        //It takes two arguments i.e callback function which has two params (accumulator, currentValue).
        //=>sum is the value obtained from previous iteration and currentValue is the current element.
        // Also it takes anothe args i.e initial value (0 here) 
    }

    expenseListDisplay.addEventListener('click',(e) =>{
        if(e.target.tagName == "BUTTON"){
            const expenseID = parseInt(e.target.getAttribute("data-id"));
            expenses = expenses.filter(expense => (expenseID !== expense.id));

            saveToLocal();
            updateTotal();
            renderExpenses();
        }
    })

});