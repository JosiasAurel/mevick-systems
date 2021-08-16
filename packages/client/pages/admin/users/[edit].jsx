import React, { useState, useEffect } from "react";

import Header from "../../../components/Header";

import router from "next/router";

import { updateUser } from "../../../utils/fetchers";

import styles from "../../../styles/dashboard.module.css";

const EditUserPage = ({ userId }) => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [token, setToken] = useState();

    useEffect(() => {
        console.log(userId);
        const authToken = localStorage.getItem("token") ?? undefined;
        if (authToken !== undefined) {
            setToken(authToken);
        }
    }, []);

    function handleChange(event, handler) {
        handler(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevent direct reload

        updateUser(token, userId, name, email).then(res => {
            if (res.status === "success") {
                router.replace("/admin");
            } else {
                alert("Could not update user information");
            }
        })
    }

    return (
        <div className={styles.updateUserInfo}>
            <Header />

            <div className={styles.editUserformContainer}>
                <h2>Update User Infomation</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <input value={name} onChange={e => handleChange(e, setName)} type="text" placeholder="Name" />
                    <input value={email} onChange={e => handleChange(e, setEmail)} type="text" placeholder="Email" />
                    <button>
                        Apply Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const userId = ctx.query.edit;

    // console.log(userId);

    return {
        props: { userId }
    }
}

export default EditUserPage;