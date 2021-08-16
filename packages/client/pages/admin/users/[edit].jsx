import React, { useState, useEffect } from "react";

import Header from "../../../components/Header";

import router from "next/router";

import { updateUser } from "../../../utils/fetchers";

const EditUserPage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [token, setToken] = useState();

    useEffect(() => {
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

        updateUser(token, name, email).then(res => {
            if (res.status === "success") {
                router.replace("/admin");
            } else {
                alert("Could not update user information");
            }
        })
    }

    return (
        <div>
            <Header />

            <div>
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

export default EditUserPage;