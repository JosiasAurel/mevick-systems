import React from "react";

import styles from "../styles/components.module.css";

const AdminArticleCard = ({ title, readTime, id, editAction, deleteAction }) => {
    return (
        <div className={styles.adminArticleCard}>
            <div className={styles.headSection}>
                <h2> { title } </h2>
                <p> {readTime} min(s) read </p>
            </div>
            <div className={styles.actionsSection}>
                <button className={styles.actionEdit} onClick={() => editAction()}>
                    Edit
                </button>
                <button className={styles.actionDelete} onClick={() => deleteAction()}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default AdminArticleCard;