import React, { useState } from 'react'

// import styles
import styles from "../../styles/register.module.css";

import { logIn } from "../../utils/fetchers";

import Header from '../../components/Header';

const TeacherLogin = () => {

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
            // do stuff here
        } else {
            alert("Something went wrong. Please make sure your email and password are correct");
        }
    }
    
    return (
        <div className={styles.registerPage}>
            <Header />

            <div className={styles.form__elements}>
                <div>
                <h2>Teacher LogIn</h2>
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

export default TeacherLogin
