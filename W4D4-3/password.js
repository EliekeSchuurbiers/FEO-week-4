const passwordVerifier = function (password) {
    // We tellen het aantal requirements waar het wachtwoord aan moet voldoen
    let score = 0;

    // Voor elke requirement maken we een interne check

    const isNotBlank = (password) =>
        password != "";

    const isLessThan9Chars = (password) =>
        password.length < 9;

    const hasUppercase = (password) =>
        password.match(/[A-Z]/);

    const hasLowercase = (password) =>
        password.match(/[a-z]/);

    const hasDigit = (password) =>
        password.match(/[0-9]/);

    // Voor elke requirement die waar is, tel 1 punt op
    if (isNotBlank(password)) score++;
    if (isLessThan9Chars(password)) score++;
    if (hasUppercase(password)) score++;
    if (hasDigit(password)) score++;
    if (hasLowercase(password)) {
        score++;
    } else {
        // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
        score = 0;
    }

    // Markeer het wachtwoord als valide als er een score van minimaal 3 is
    return {
        score: score,
        valid: score >= 3,
    };
};

console.log(passwordVerifier("Pass5!"));

module.exports = passwordVerifier;

//output= score:5 valid:true