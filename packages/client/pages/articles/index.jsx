import React, { useState, useEffect } from "react";

import styles from "../../styles/dashboard.module.css";

import ArticleCard from "../../components/articleCard";

import { fetchArticles } from "../../utils/fetchers";

import { useRouter } from "next/router";
import Header from "../../components/Header";

const DashboardPage = () => {

    const router = useRouter();

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const waitTime = Math.floor(Math.random() * 4000);
        const authToken = localStorage.getItem("token");
        fetchArticles(authToken).then(articles_ => {
            setArticles(articles_.getArticles);
            if (articles_ !== undefined) {
                setTimeout(() => setLoading(false), waitTime);
            }
            console.log(articles);
        });
        
    }, [loading]);
    
    if (loading) {
        return (
            <div>
                <Header />
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
            <Header />
                <main className={styles.mainContent}>
                    { articles === [] ?
                    <div>
                        <div>
                            <h1>No Articles yet!</h1>
                            <button onClick={() => router.reload()} >Retry</button>
                        </div>
                    </div>
                    :
                    <article className={styles.articlesCn}>
                    { articles.map(({ title, readTime, id }) => {
                    return (
                        <ArticleCard 
                        key={id}
                        id={id}
                        title={title}
                        readTime={readTime}
                        />
                    )
                }) }
                </article>
                     }
                    
                </main>
        </div>
    )
}

export default DashboardPage;