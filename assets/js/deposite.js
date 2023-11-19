// deposite  section start
document.getElementById('btn-deposit').addEventListener('click', function(){
   
    const depositeField = document.getElementById('input-deposite');
    const deposite = depositeField.value;
    const depositAmount = parseFloat(deposite);
     
    
        
    const depositeDoller = document.getElementById ('deposite-doller');
    const totalDeposite = depositeDoller.innerText;
    const totalDepositeAmount = parseFloat(totalDeposite);

    const totalAmount = totalDepositeAmount + depositAmount ;
    depositeDoller.innerText = totalAmount;


    const newBalance = document.getElementById('total-doller');
    const totalBalance = newBalance.innerText;
    const balance = parseFloat (totalBalance);

    const totalFinalBalance = balance + depositAmount;
    newBalance.innerText = totalFinalBalance;


    depositeField.value = '';
})

// deposite  section end





