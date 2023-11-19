// withdraw section start
    // step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('input-withdraw');
   const newWithdrawField = withdrawField.value;
   const withdraw = parseFloat (newWithdrawField);
//    step-7
withdrawField.value = '';

if (isNaN(withdraw)){
    alert('Please provide a valid Number');
    return;
}



    // step-2
   const withdrawDoller = document.getElementById('withdraw-doller');
   const totalWithdraw = withdrawDoller.innerText;
   const totalFinalWithdraw = parseFloat(totalWithdraw);
    

    
    

     
//  step-4
   const totalDoller = document.getElementById ('total-doller');
   const totalFinalDoller = totalDoller.innerText;
   const finalTotal = parseFloat (totalFinalDoller);

  

// step-5

if ( withdraw > finalTotal){
    alert('Its higher');
    return;
}
// step-3
const total = totalFinalWithdraw + withdraw;
withdrawDoller.innerText = total;



//   step-6
   const finalWithdraw = finalTotal - withdraw ;
   totalDoller.innerText = finalWithdraw;
    


})

// withdraw section end