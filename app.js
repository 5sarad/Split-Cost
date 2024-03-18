(() => {
let expensesItems = []
const currentDate = new Date();
function addNewExpenses() {
    const expenseName= document.querySelector(".description input").value;
    let expenseAmount = document.querySelector(".amount div input").value;
    const item = document.createElement("div");
    item.innerHTML = `  <div class="items-disc">
                            <p>${expenseName}</p>
                            <p>$${expenseAmount}</p>
                        </div>
                        <p>${currentDate.toLocaleString()}</p>`
    item.classList.add("item");
    expensesItems.push(item);
   
    expensesItems.forEach(eachItem =>{
        document.querySelector(".items-lists").prepend(eachItem);
    })
    document.querySelector(".description input").value = "";
    document.querySelector(".amount div input").value = "";
    expenseAmount = parseFloat(expenseAmount);
    let settleAmount = (expenseAmount/4).toFixed(2);
    document.querySelector(".settle-amount p").innerText = settleAmount;
   
   
   
}
function settleNow(){
    document.querySelector(".settle-amount p").innerText = "00.00";
   
   
    newAmount = parseFloat(settleAmount) + parseFloat(expenseAmount);
    userAmount = (newAmount/4).toFixed(2);
    const settleAmount = document.querySelector(".settle-amount p").innerText;

}

document.getElementById("add-new").addEventListener("click", addNewExpenses);
document.getElementById("settle-now").addEventListener("click", settleNow);

})();