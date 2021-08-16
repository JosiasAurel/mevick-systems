import React from "react";

import styles from "../styles/tools.module.css";

import Link from "next/link";

const ToolComp = ({ toolName, target }) => {
    return (
        <Link href={target}>
            <div className={styles.tool}>
                <h1>
                    { toolName }
                </h1>
            </div>
        </Link>
    )
}

export default ToolComp;