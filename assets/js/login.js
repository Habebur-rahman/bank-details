//  login section start
 document.getElementById('button').addEventListener('click', function(){
    
    const emailFiled = document.getElementById('input-email');
    const email = emailFiled.value;
    
    
  
    const passwordFiled = document.getElementById('input-password');
    const password = passwordFiled.value;
  
    if ( email === 'abc@gmail.com'  && password === 'habib'){
        window.location.href = 'bank.html';
    }

    else{
        alert('Wrong Password');
    }


 })
//  login section end