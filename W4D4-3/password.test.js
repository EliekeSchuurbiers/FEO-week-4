const passwordVerifier = require("./password");

//1. password is korter dan 9 karakters
test("password is korter dan 9 karakters", () => {
    const password = "blavla";
    expect(password.length <= 9).toEqual(true);
});

//2. password is niet `null`
test("passwordveld is niet leeg", () => {
    const password = "StomPasswordtest5!";
    expect(password).not.toEqual(null);
});

//3. password heeft 1 of meer uppercase karakters
test("password heeft 1 of meer uppercase karakters", () => {
    const password = "StomPasswordtest5!";
    expect(password).toMatch(/[A-Z]/);
});


//4. password heeft 1 of meer lowercase karakters
test("password heeft 1 of meer lowercase karakters", () => {
    const password = "StomPasswordtest5!";
    expect(password).toMatch(/[a-z]/);
});

//5. password heeft 1 of meer cijfers
test("password heeft 1 of meer cijfers", () => {
    const password = "StomPasswordtest5!";
    expect(password).toMatch(/[0-9]/);
});

//conditie 1.4 true is (die moet dus **altijd** true zijn)
test("lowercase voorwaarde altijd true", () => {
    const password = passwordVerifier("StomPasswordtest5!");
    expect(password.valid).toBe(true);
});

test("wachtwoord is true", () => {
    const password = passwordVerifier("StomPasswordtest5!");
    expect(password.score).toBeGreaterThanOrEqual(3)
    expect(password.valid).toEqual(true);
});

test("wachtwoord is false", () => {
    const password = passwordVerifier("StomPasswordtest5!");
    expect(password.score <= 3).toEqual(false);
    expect(password.valid).toEqual(false);
});