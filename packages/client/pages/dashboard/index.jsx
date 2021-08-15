import React from "react";

import styles from "../../styles/dashboard.module.css";

const DashboardPage = () => {
    return (
        <div className={styles.dashboardIndexPage}>
            <header className={styles.header}>
                <h2 className={styles.logo}>Mevick Systems_</h2>
            </header>

            <article>
                <div>
                    <h2>Title</h2>
                    <span>
                        <p> 5 min(s) read </p>
                        <p> Sun 15 Aug 2021 </p>
                    </span>
                </div>
            </article>
        </div>
    )
}

export default DashboardPage;