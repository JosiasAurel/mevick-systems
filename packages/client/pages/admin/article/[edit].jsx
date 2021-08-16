import React, { useEffect, useState } from "react";

import Header from "../../../components/Header";

import styles from "../../../styles/dashboard.module.css";

import router from "next/router";

import { updateArticle } from "../../../utils/fetchers";

const EditArticlePage = ({ articleId }) => {

    const [token, setToken] = useState();

    useEffect(() => {
        const authToken = localStorage.getItem("token") ?? undefined;
        if (authToken !== undefined) {
            setToken(authToken);
        }
    }, []);
    
    const [title, setTitle] = useState("");
    const [readTime, setReadTime] = useState();
    const [content, setContent] = useState("");

    const handleChange = (event, handler) => handler(event.target.value);

    function handleCreateArticle(event) {
        event.preventDefault();

        updateArticle(token, articleId, title, content, readTime).then(res => {
            console.log(res);
        });

        router.replace("/admin");
    }

    return (
        <div>
            <Header />
        <div className={styles.createArticleCn}>
            <form onSubmit={e => handleCreateArticle(e)} className={styles.createArticleForm}>
                <input value={title} onChange={e => handleChange(e, setTitle)} type="text" placeholder="Title" />
                <input value={readTime} onChange={e => handleChange(e, setReadTime)} type="number" placeholder="Read time. Example 2 minutes" />
                <textarea value={content} onChange={e => handleChange(e, setContent)} cols="90" rows="15" placeholder="Content goes in here">

                </textarea>
                <button>
                    Save Article
                </button>
            </form>
        </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const articleId = ctx.query.edit;

    // console.log(userId);

    return {
        props: { articleId }
    }
}

export default EditArticlePage;