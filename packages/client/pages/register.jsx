import React from 'react'
import Link from 'next/link'

// import styles
import styles from "../styles/register.module.css";

const Register = () => {
    return (
        <div className={styles.registerPage}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Mevick</h1>
            </header>

            <div className={styles.form__elements}>
                <div>
                <h2>Register</h2>
                <div className={styles.formContainer}>
                <form>
                    <input type="text" placeholder="User name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>
                        Register
                    </button>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Register
