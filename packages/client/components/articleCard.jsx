import React from "react";

import styles from "../styles/components.module.css";

import Link from "next/link";

const ArticleCard = ({ title, readTime, id }) => {
    return (
        <Link href={`explore/${id}`}>
            <div className={styles.articleCard}>
                <h2> {title} </h2>
                <span>
                    <p> {readTime} min(s) read </p>
                    <p> "" </p>
                </span>
            </div>
        </Link>
    )
}

export default ArticleCard;