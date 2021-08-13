import React, { useState } from 'react'

// import styles
import styles from "../../styles/register.module.css";

const LoginStudent = () => {

    // form state values and handler
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // form value change handler
    function handleInputChange(event, handler) {
        handler(event.target.value);
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
                <form>
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
