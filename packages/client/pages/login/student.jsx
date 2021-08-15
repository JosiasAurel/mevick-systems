import React, { useState } from 'react'

// import styles
import styles from "../../styles/register.module.css";

import { logIn } from "../../utils/fetchers";
import { setCredentials } from "../../utils/misc";

const LoginStudent = () => {

    // form state values and handler
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // form value change handler
    function handleInputChange(event, handler) {
        handler(event.target.value);
    }

    async function logInStudent(event) {
        event.preventDefault(); // prevent browser from reloading

        const logInResponse = await logIn(email, password);
        // console.log(logInResponse);

        if (logInResponse.message === "Login Successful") {
            console.log(logInResponse);
            setCredentials(logInResponse.name, logInResponse.token);
        } else {
            alert("Something went wrong. Please make sure your email and password are correct");
        }
    }
    
    return (
        <div className={styles.registerPage}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Mevick</h1>
            </header>

            <div className={styles.form__elements}>
                <div>
                <h2>Student LogIn</h2>
                <div className={styles.formContainer}>
                <form onSubmit={event => logInStudent(event)}>
                    <input value={email} onChange={e => handleInputChange(e, setEmail)} type="email" placeholder="Email" />
                    <input value={password} onChange={e => handleInputChange(e, setPassword)} type="password" placeholder="Password" />
                    <button>
                        Log In
                    </button>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default LoginStudent
