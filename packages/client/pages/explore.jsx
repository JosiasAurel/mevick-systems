import React from "react";

import styles from "../styles/dashboard.module.css";

import ToolComp from "../components/Tool";

const ExplorePage = () => {
    return (
        <div>
                <header className={styles.header}>
                    <h2 className={styles.logo}>Mevick Systems_</h2>
                </header>

                <main className={styles.tools}>
                    <ToolComp toolName="Articles" target="/articles" />
                    <ToolComp toolName="Math Solver" target="/math" />
                </main>
                
            </div>
    )
}

export default ExplorePage;