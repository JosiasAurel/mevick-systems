import React from 'react'

// import styles
import styles from "../../styles/register.module.css";

const TeacherLogin = () => {
    return (
        <div className={styles.registerPage}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Mevick</h1>
            </header>

            <div className={styles.form__elements}>
                <div>
                <h2>Teacher LogIn</h2>
                <div className={styles.formContainer}>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
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
