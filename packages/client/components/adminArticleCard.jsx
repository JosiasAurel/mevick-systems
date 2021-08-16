import React from "react";

import styles from "../styles/components.module.css";

const AdminArticleCard = ({ title, readTime, id, editAction, deleteAction }) => {
    return (
        <div className={styles.adminArticleCard}>
            <div>
                <h2> { title } </h2>
                <p> {readTime} min(s) read </p>
            </div>
            <div>
                <button onClick={() => editAction()}>
                    Edit
                </button>
                <button onClick={() => deleteAction()}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default AdminArticleCard;