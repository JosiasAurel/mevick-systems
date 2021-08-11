import React from 'react'
import styles from  '../header.module.css'
import Link from 'next/link'

const Register = () => {
    return (
        <div className={styles.registration}>
             <div className={styles.who}>
                 <h1 className={styles.h1}>Mevick System</h1>
                 <div className={styles.identification}>
                 <Link href="">
                    <button className={styles.button}>Student</button>
                 </Link>
                 <div className={styles.zed}></div>
                 <Link href="">
                    <button className={styles.button}>Teacher</button>
                 </Link>
                 </div>
             </div>
        </div>
    )
}

export default Register
