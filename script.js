function inputAction() {
    let alert = document.getElementById('inputAlert');
    let email = document.getElementById('emailAddress').value;
    const regexp = /^[A-Za-z0-9\.\_\-\+]+@([A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/
    if(email.length == 0) {
        alert.style.color = '#FB3E3E';
        alert.textContent = 'Oops! Please add your email'
    }
    else {
        if(regexp.test(email)){
            alert.style.color = '#23f847';
            alert.textContent = 'Awesome! We\'ll be in touch!';

        }
        else {
            alert.style.color = '#FB3E3E';
            alert.textContent = 'Oops! Please check your email';
        }
    }
    alert.style.display = 'inline';
}
    

function rebootNode(elementID){
    let reboot = elementID.cloneNode(true);
    reboot.id = elementID;
    oldNode.parentNode.replaceChild(reboot, oldNode);
}


document.getElementById('emailAddress').addEventListener('click',() => {
    const emailText = document.getElementById('emailAddress');
    if(emailText.value == 'Email Address'){
        emailText.value = '';
    };
});

document.getElementById('requestButton').addEventListener('click', inputAction);