import React, { useState } from "react";

import Header from "../../../components/Header";

import styles from "../../../styles/dashboard.module.css";

import router from "next/router";

const CreateArticlePage = () => {
    
    const [title, setTitle] = useState();
    const [readTime, setReadTime] = useState();
    const [content, setContent] = useState();

    const handleChange = (event, handler) => handler(event.target.value);

    return (
        <div>
            <Header />
        <div className={styles.createArticleCn}>
            <form className={styles.createArticleForm}>
                <input value={title} onChange={e => handleChange(e, setTitle)} type="text" placeholder="Title" />
                <input value={readTime} onChange={e => handleChange(e, setReadTime)} type="text" placeholder="Read time. Example 2 minutes" />
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

export default CreateArticlePage;