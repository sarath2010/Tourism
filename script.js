function validate1(){
    // let phoneNumber = document.getElementById('phone-number').value;
    let email = document.getElementById('email').value;
    let passw = document.getElementById('passw').value;
    // let phoneRGEX = /^[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwRGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    // let phoneResult = phoneRGEX.test(phoneNumber);
    let emailResult = emailRGEX.test(email);
    let passwResult = passwRGEX.test(passw);
    
    if(emailResult == false)
    {
      alert('Please enter a valid email');
      return false;
    }
    if(passwResult == false)
    {
      alert('Please enter a password with 8-16 characters including atleast a number, special character, capital & small letters');
      return false;
    }
    // if(phoneResult == false)
    // {
    //   alert('Please enter a valid phone number');
    //   return false;
    // }
    else{
    alert("Success!");
    return true;
    }
}

let timeout;
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,16}')
let mediumPassword = new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,9}')

function StrengthChecker(PasswordParameter) {
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    } else if(mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Poor';
    }
}

    passw.addEventListener("input", () => {
    strengthBadge.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(passw.value), 500);
    if(passw.value.length !== 0) {
        strengthBadge.style.display != 'block';
    } else {
        strengthBadge.style.display = 'none';
    }
    });

    function validate2(){
        let phoneNumber = document.getElementById('phone-number').value;
        let email = document.getElementById('email').value;
        let passw = document.getElementById('passw').value;
        let phoneRGEX = /^[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        let emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passwRGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
        let phoneResult = phoneRGEX.test(phoneNumber);
        let emailResult = emailRGEX.test(email);
        let passwResult = passwRGEX.test(passw);
        
        if(emailResult == false)
        {
          alert('Please enter a valid email');
          return false;
        }
        if(passwResult == false)
        {
          alert('Please enter a password with 8-16 characters including atleast a number, special character, capital & small letters');
          return false;
        }
        if(phoneResult == false)
        {
          alert('Please enter a valid phone number');
          return false;
        }
        else{
        alert("Success!");
        return true;
        }
    }