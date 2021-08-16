import React, { useState, useEffect } from "react";

import styles from "../../styles/dashboard.module.css";

// admin components
import AdminUserCard from "../../components/adminUserCard";
import AdminArticleCard from "../../components/adminArticleCard";
import Header from "../../components/Header";

// utilities - fetchers
import { fetchUsers, deleteUser, fetchArticles, deleteArticle } from "../../utils/fetchers";

import Link from "next/link";
import router from "next/router";

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
    const [token, setToken] = useState("");

    useEffect(() => {
        const waitTime = Math.floor(Math.random() * 2500);
        const authToken = localStorage.getItem("token");
        setToken(authToken);

        fetchUsers(authToken).then(users_ => {
            setUsers(users_.getUsers);
            console.log(users_);
            if (users_ !== undefined) {
                setTimeout(() => setLoading(false), waitTime);
            }
        });
    }, []);

    function deleteUser_(uid) {
        return function manage() {
            deleteUser(token, uid).then(res => {
                router.reload();
            });
        }
    }

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
                        deleteAction={deleteUser_(id)}
                        editAction={() => router.replace(`/admin/users/${id}`)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Articles = () => {
    const [articles, setArticles] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
        const waitTime = Math.floor(Math.random() * 2500);
        const authToken = localStorage.getItem("token");
        setToken(authToken);

        fetchArticles(authToken).then(articles_ => {
            setArticles(articles_.getArticles);
            console.log(articles_);
            if (articles_ !== undefined) {
                setTimeout(() => setLoading(false), waitTime);
            }
        });
    }, []);

    function deleteArticle_(aid) {
        return function da_() {
            deleteArticle(token, aid).then(res => {
                console.log(res);
            });
        }
    }

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
            <Link href="/admin/article/create">
                <button className={styles.createArticle_Article}>
                    Create Article
                </button>
            </Link>
            
            <div className={styles.adminUsersUsersList}>
                {articles.map(({ title, readTime, id }) => {
                    return (
                        <AdminArticleCard 
                        key={id}
                        title={title}
                        readTime={readTime}
                        deleteAction={deleteArticle_(id)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AdminPage;