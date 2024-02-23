function validateForm(event){
    event.preventDefault();
    regisForm = document.getElementById("regisForm")
        email = document.getElementById("email")
        password = document.getElementById("password")
        error = document.getElementById("error")

    if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email must end with '@gmail.com'!"
        alert("Email must end with '@gmail.com'!")
    }
    else if(!isAlphaNumeric(password.value)){
        error.innerHTML = "Password must be alphanumeric!"
        alert("Password must be alphanumeric!")
    }
    else{
        error.innerHTML = "catalog.html"
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