// deposit  section start
document.getElementById('btn-deposit').addEventListener('click', function(){
   
    const depositField = document.getElementById('input-deposit');
    const deposit = depositField.value;
    const depositAmount = parseFloat(deposit);

    depositField.value = '';

    if (isNaN(depositAmount)){
        alert('Please provide a valid Number');
        return;
    }
     
    
        
    const depositDoller = document.getElementById ('deposit-doller');
    const totalDeposit = depositDoller.innerText;
    const totalDepositAmount = parseFloat(totalDeposit);

    const totalAmount = totalDepositAmount + depositAmount ;
    depositDoller.innerText = totalAmount;


    const newBalance = document.getElementById('total-doller');
    const totalBalance = newBalance.innerText;
    const balance = parseFloat (totalBalance);

    const totalFinalBalance = balance + depositAmount;
    newBalance.innerText = totalFinalBalance;


   
})

// deposit  section end





