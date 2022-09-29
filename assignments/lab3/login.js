const postLoad = () => {
  console.log("Welcome to Log In Form")

  let logInButton = document.getElementById('loginButton')

  logInButton.onclick = () => {
    let emailInput = document.getElementById('inputEmail').value;
    let passwordInput = document.getElementById('inputPassword').value;

    //(SAFER)
    //if username and password is empty
    if (!emailInput && !passwordInput) {
      alert('Please enter email and password');
      return;
      //if username is blank, throw an error
    } else if (!emailInput) {
      alert('please enter email');
      return;
      //if password is blank, throw an error
    } else if (!passwordInput) {
      alert('please enter password');
      return;
    }

    //if both username and password have less than 3 characters
    if (emailInput.length < 3 && passwordInput.length < 3) {
      alert('email and password should have more than 3 characters');
      return;
      // //If username is less than three (3) characters, throw an error
    } else if (emailInput.length < 3) {
      alert('email should have more than 3 characters');
      return;
      //If password is less than three (3) characters, throw an error
    } else if (passwordInput.length < 3) {
      alert('password should have more than 3 characters');
      return;
    }

    //if given password or username is correct and at the same time one is wrong
    if (emailInput === "rflprdnt@gmail.com" && passwordInput === "raprap") {
      location.href = "home.html"
    } else if (emailInput === "rflprdnt@gmail.com" && passwordInput != "raprap") {
      alert('Wrong Password');
      return;
    } else if (emailInput != "rflprdnt@gmail.com" && passwordInput === "raprap") {
      alert('Wrong email');
      return;
    } else {
      alert('Invalid email or password! Please Try Again');
      return;
    }

    //OTHER WAY
    // //other way 
    // if (!usernameTxt || !passwordTxt) {
    //   alert('please enter username or password');
    //   return
    // } else if (passwordTxt.length < 3 || usernameTxt.length < 3) {
    //   alert('password or username should have more than 3 characters');
    //   return
    // }

  }
}
window.onload = postLoad;