
import React from "react";

import styles from "../styles/components.module.css";

const AdminUserCard = ({ name, email, editAction, deleteAction  }) => {
    return (
        <div className={styles.adminUserCard}>
            <h2> {name} </h2>
            <h2> {email} </h2>
            <div className={styles.actions}>
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

export default AdminUserCard;