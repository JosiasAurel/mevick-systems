
const SERVER_URI = "http://localhost:5000";

async function signUp(name, email, password, userType) {

    // request Headers
    const requestHeader = {
        "Content-Type": "application/json"
    };

    const signUpBody = {
        name,
        email,
        password,
        role: userType
    };

    const signUpResult = await fetch(`${SERVER_URI}/signup`, {
        mode: "POST",
        headers: requestHeader,
        body: JSON.stringify(signUpBody)
    });

    const signUpData = await signUpResult.json();

    return signUpData;
}

async function logIn(email, password) {

    // request Headers
    const requestHeader = {
        "Content-Type": "application/json"
    };

    const logInBody = {
        email,
        password
    };

    const logInResult = await fetch(`${SERVER_URI}/login`, {
        mode: "POST",
        headers: requestHeader,
        body: JSON.stringify(logInBody)
    });

    const logInData = await logInResult.json();

    return logInData;
}
