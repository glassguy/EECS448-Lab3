function passCompare(){
  var pass1 = new String(document.getElementById("initialPass").value);
  var pass2 = new String(document.getElementById("verifyPass").value);

  if(pass1.length < 8){
    alert("Error: Passwords must be at least 8 characters in length.");
  }
  else {
    if(pass1.localeCompare(pass2) != 0){
      alert("Error: The given passwords do not match!");
    }
    else {
      alert("PASSWORD VERIFICATION SUCCESSFUL! \n Your new password is: " + pass1);
    }
  }
}
