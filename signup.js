function validateForm(event){
    event.preventDefault();
    regisForm = document.getElementById("regisForm")
        username = document.getElementById("username")
        email = document.getElementById("email")
        password = document.getElementById("password")
        confirmPassword = document.getElementById("confirm")
        error = document.getElementById("error")

    if(username.value.length < 5){
        error.innerHTML = "Full name must be at least 5 characters"
        alert("Full name must be at least 5 characters!")
    }   
    else if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email must end with '@gmail.com'!"
        alert("Email must end with '@gmail.com'!")
    }
    else if(!isAlphaNumeric(password.value)){
        error.innerHTML = "Password must be alphanumeric!"
        alert("Password must be alphanumeric!")
    }
    else if(password.value != confirmPassword.value){
        error.innerHTML = "Password doesn't match!"
        alert("Password doesn't match!")
    }
    else{
        error.innerHTML = ""
        alert("Successful!")
        regisForm.submit()
    }
}

function isAlphaNumeric(pw){
    var num = false
    var alpha = false
    for(let i=0; i<pw.length; i++){
        if(!isNaN(pw[i])){
            //isNan = is not a number
            num = true
        }
        else{
            alpha = true
        }

        if(num&&alpha){
            return true
        }
    }
    return false
}