//  login section start
 document.getElementById('button').addEventListener('click', function(){
    
    const emailField = document.getElementById('input-email');
    const email = emailField.value;
    
    
  
    const passwordField = document.getElementById('input-password');
    const password = passwordField.value;
  
    if ( email === 'abc@gmail.com'  && password === 'habib'){
        window.location.href = 'bank.html';
    }

    else{
        alert('Wrong Password');
    }


 })
//  login section end











