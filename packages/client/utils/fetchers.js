
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

