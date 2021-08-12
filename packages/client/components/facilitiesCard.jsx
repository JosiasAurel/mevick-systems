import React from "react";

import styles from "../styles/header.module.css";

const Facility = ({ facility, title, content  }) => {
    return (
        <div className={styles[facility]}>
                <div className={styles.overlay}>
                    <h1 className={styles.whatWeOfferWrapperTitle}> {title} </h1>
                    <p>
                        { content }
                    </p>
            </div>
        </div>
    )
}

export default Facility;