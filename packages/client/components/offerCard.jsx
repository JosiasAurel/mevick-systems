import React from "react";

import styles from "../styles/header.module.css";

const OfferCard = ({ title, content }) => {
    return (
        <div className={styles.offer}>
            <p className={styles.whatWeOfferWrapperTitle}>{ title }</p>
                <p>
                    { content }
                </p>
        </div>
    )
}

export default OfferCard;