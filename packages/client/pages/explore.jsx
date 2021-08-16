import React from "react";

import styles from "../styles/dashboard.module.css";

import ToolComp from "../components/Tool";

import Header from "../components/Header";

const ExplorePage = () => {
    return (
        <div>
                <Header />

                <main className={styles.tools}>
                    <ToolComp toolName="Articles" target="/articles" />
                    <ToolComp toolName="Math Solver" target="/math" />
                </main>
                
            </div>
    )
}

export default ExplorePage;