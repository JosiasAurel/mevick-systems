import React from "react";
import Link from 'next/link'
import styles from  './header.module.css'

const IndexPage = () => {
    return (
        <div className={styles.container}>
                <nav className={styles.nav}>
                    <header className={styles.header}>
                        <div className={styles.logo}>
                            <h1 className={styles.h1}>Mevick</h1>
                        </div>
                        <div className={styles.navbar}>
                            <ul className={styles.list}>
                                <li className={styles.name}>Manual</li>
                                <li className={styles.name}>About</li>
                                <li className={styles.name}>Contact</li>
                                <Link href="/Components/Register">
                                <li className={styles.name1}>Register</li>    
                                </Link>
                            </ul>
                        </div>
                    </header>
                </nav>
            <div className={styles.content}>
               <h1 className={styles.h1}>Mevick Bilingual Grammar School</h1>
               <p className={styles.para}>Work-Knowledge-Progress</p>
               <button className={styles.button}>No More</button>
            </div>
        </div>
    )
}

export default IndexPage;