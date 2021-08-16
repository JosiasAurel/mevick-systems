
function setCredentials(name, token) {
    localStorage.setItem("name", name);
    localStorage.setItem("token", token);
    return;
}

export { setCredentials };