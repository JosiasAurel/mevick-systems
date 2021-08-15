import React from "react";

import styles from "../styles/components.module.css";

const ArticleCard = ({ title, readTime, date }) => {
    return (
        <div className={styles.articleCard}>
            <h2> {title} </h2>
            <span>
                <p> {readTime} min(s) read </p>
                <p> {date} </p>
            </span>
        </div>
    )
}

export default ArticleCard;