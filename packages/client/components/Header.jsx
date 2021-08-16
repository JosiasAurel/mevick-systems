import React, { useState, useEffect } from "react";

import styles from "../styles/dashboard.module.css";

const Header = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        const name_ = localStorage.getItem("name") ?? undefined;

        if (name_ !== undefined) {
            setName(name_);
        }
    }, []);
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>Mevick Systems_</h2>

            <p className={styles.name}> {name} </p>
        </header>
    )
}

export default Header;