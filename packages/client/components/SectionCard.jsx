import React from "react";

import styles from "../styles/header.module.css";

const SectionCard = ({ title, content, style }) => {
    return (
        <div className={styles[style] + " " + styles["sectionCard"]}>
            <div className={styles.overlay}>
                <h1 className={styles.whatWeOfferWrapperTitle}>{ title }</h1>
                    <p>
                        { content }
                    </p>
            </div>
        </div>
    )
}

export default SectionCard;