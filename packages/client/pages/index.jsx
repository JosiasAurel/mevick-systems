import React from "react";
import classes from  './header.module.css'

const IndexPage = () => {
    return (
        <div className="container">
            <div>
                <nav className={classes.nav}>
                    <header className={classes.header}>
                        <div className={classes.logo}>
                            Logo
                        </div>
                        <div className={classes.navbar}>
                            <ul className={classes.list}>
                                <li className={classes.name}>Manual</li>
                                <li className={classes.name}>About</li>
                                <li className={classes.name}>Contact</li>
                                <li className={classes.name}>Register</li>
                            </ul>
                        </div>
                    </header>
                </nav>
            </div>
        </div>
    )
}

export default IndexPage;