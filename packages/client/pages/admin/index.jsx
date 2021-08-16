import React, { useState, useEffect } from "react";

import styles from "../../styles/dashboard.module.css";

// admin components
import AdminUserCard from "../../components/adminUserCard";
import Header from "../../components/Header";

// utilities - fetchers
import { fetchUsers } from "../../utils/fetchers";

import Link from "next/link";

const AdminPage = () => {
    const [page, setPage] = useState("users");

    return (
        <div>
            <Header />

            <div className={styles.adminDashboard}>
                <div className={styles.adminDashboardToggle}>
                    <button onClick={() => setPage("users")}>
                        Users
                    </button>
                    <button onClick={() => setPage("articles")}>
                        Article
                    </button>
                </div>

                <div>
                    { page === "users" ? <Users /> : <Articles /> }
                </div>
            </div>
        </div>
    )
}

const Users = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const waitTime = Math.floor(Math.random() * 2500);
        const authToken = localStorage.getItem("token");

        fetchUsers(authToken).then(users_ => {
            setUsers(users_.getUsers);
            console.log(users_);
            if (users_ !== undefined) {
                setTimeout(() => setLoading(false), waitTime);
            }
        });
    }, []);

    if (loading) {
        return (
            <div>
                <div className={styles.loaderCn}>
                    <div className={styles.loader}>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Link href="/admin/users/create">
                <button className={styles.createUser_User}>
                    Create User
                </button>
            </Link>
            
            <div className={styles.adminUsersUsersList}>
                {users.map(({ name, email, id }) => {
                    return (
                        <AdminUserCard 
                        key={id}
                        name={name}
                        email={email}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Articles = () => {
    return (
        <div>
            <h2>Article things...</h2>
        </div>
    )
}

export default AdminPage;