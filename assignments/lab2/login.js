const postLoad = () => {
  console.log("Welcome to Log In Form")

  let logInButton = document.getElementById('loginButton')

  logInButton.onclick = () => {
    let usernameInput = document.getElementById('username').value;
    let passwordInput = document.getElementById('password').value;

    //(SAFER)
    //if username and password is empty
    if (!usernameInput && !passwordInput) {
      alert('Please enter username and password');
      return;
      //if username is blank, throw an error
    } else if (!usernameInput) {
      alert('please enter username');
      return;
      //if password is blank, throw an error
    } else if (!passwordInput) {
      alert('please enter password');
      return;
    }

    //if both username and password have less than 3 characters
    if (usernameInput.length < 3 && passwordInput.length < 3) {
      alert('username and password should have more than 3 characters');
      return;
      // //If username is less than three (3) characters, throw an error
    } else if (usernameInput.length < 3) {
      alert('username should have more than 3 characters');
      return;
      //If password is less than three (3) characters, throw an error
    } else if (passwordInput.length < 3) {
      alert('password should have more than 3 characters');
      return;
    }

    //if given password or username is correct and at the same time one is wrong
    if (usernameInput === "admin" && passwordInput === "root") {
      location.href = "home.html"
    } else if (usernameInput === "admin" && passwordInput != "root") {
      alert('Wrong Password');
      return;
    } else if (usernameInput != "admin" && passwordInput === "root") {
      alert('Wrong Username');
      return;
    } else {
      alert('Invalid username or password! Please Try Again');
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