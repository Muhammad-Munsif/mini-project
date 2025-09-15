const login = (e) => {
    e.preventDefault()
    const passwordInput = document.getElementById("password")
    const passwordValue = passwordInput.value;
    // console.log(passwordValue)
    if (passwordValue == "munsif@123") {
        alert("registration successfully")
    } else {
        alert("Pleased try again")
    }
}