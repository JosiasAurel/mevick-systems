import React, { useEffect, useState } from "react";

import { fetchArticle } from "../../utils/fetchers";

import styles from "../../styles/dashboard.module.css";

import Header from "../../components/Header";

const ArticlePage = () => {

    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const articleId = location.href.split("/")[4];
        const waitTime = Math.floor(Math.random() * 2500);

        const authToken = localStorage.getItem("token");

        fetchArticle(authToken, articleId).then(articles_ => {
            setArticle(articles_.getArticle);
            if (articles_ !== undefined) {
                setTimeout(() => setLoading(false), waitTime);
            }
            console.log(article);

            return function cleanup() {
                return;
            }
        });
        
    }, [loading]);

    if (loading) {
        <div>
                <Header />
                <div className={styles.loaderCn}>
                    <div className={styles.loader}>

                    </div>
                </div>
            </div>
    }

    return (
        <div>
                <Header />

                <main>
                    { article !== undefined ?
                    <article className={styles.article_}>
                        <div className={styles.articleHead}>
                            <h2> {article.title} </h2>
                            <p> { article.readTime } min(s) read </p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                {article.content}
                            </p>
                        </div>
                    </article>
                    : 
                    ""
                    }
                </main>
                
            </div>
    )
}


export default ArticlePage;