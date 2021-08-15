import React, { useState, useEffect } from "react";

import styles from "../../styles/dashboard.module.css";

import ArticleCard from "../../components/articleCard";

import { fetchArticles } from "../../utils/fetchers";

const DashboardPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const authToken = localStorage.getItem("token");
        fetchArticles(authToken).then(articles_ => {
            setArticles(articles_.getArticles);
            if (articles_ !== undefined) {
                setTimeout(() => setLoading(false), 2000);
            }
            console.log(articles);
        });
        
    }, [loading]);
    
    if (loading) {
        return (
            <div>
                <header className={styles.header}>
                    <h2 className={styles.logo}>Mevick Systems_</h2>
                </header>
                <div className={styles.loaderCn}>
                    <div className={styles.loader}>

                    </div>
                </div>
            </div>
        )
    }

    let pageContent = articles;
    console.log(pageContent);
    return (
        <div className={styles.dashboardIndexPage}>
            <header className={styles.header}>
                <h2 className={styles.logo}>Mevick Systems_</h2>
            </header>
                <main className={styles.mainContent}>
                    <article className={styles.articlesCn}>
                    { articles.map(({ title, readTime, id }) => {
                    return (
                        <ArticleCard 
                        key={id}
                        title={title}
                        readTime={readTime}
                        />
                    )
                }) }
                </article>
                </main>
        </div>
    )
}

export default DashboardPage;