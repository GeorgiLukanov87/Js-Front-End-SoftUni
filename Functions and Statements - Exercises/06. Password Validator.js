function passValidator(password) {
    let is_valid = true;

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters")
        is_valid = false;
    }
    if (!/^[A-Za-z0-9]*$/.test(password)) {
        console.log("Password must consist only of letters and digits")
        is_valid = false;
    }

    let digits = (onlyLettersAndNumbers(password))
    if (digits < 2) {
        console.log("Password must have at least 2 digits")
        is_valid = false;
    }

    function onlyLettersAndNumbers(password) {
        let digitsCounter = 0;
        for (let i = 0; i < password.length; i++) {
            if (/^[0-9]*$/.test(password[i])) {
                digitsCounter++;
            }
        }
        return digitsCounter;
    }

    if (is_valid) {
        console.log("Password is valid")
    }


}

passValidator('logIn')
passValidator('MyPass123')
passValidator('Pa$s$s')
