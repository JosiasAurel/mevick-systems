import React, { useState, useEffect } from "react";

import styles from "../../styles/dashboard.module.css";

import ArticleCard from "../../components/articleCard";

import { fetchArticles } from "../../utils/fetchers";

const DashboardPage = () => {
    useEffect(() => {
        fetchArticles();
    }, []);
    return (
        <div className={styles.dashboardIndexPage}>
            <header className={styles.header}>
                <h2 className={styles.logo}>Mevick Systems_</h2>
            </header>

            <article>
                <ArticleCard 
                title={"How to handle network egress issues"}
                readTime={4}
                date={"Sun 15 Aug 2021"}
                />
            </article>
        </div>
    )
}

export default DashboardPage;