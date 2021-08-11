
const SERVER_URI = "http://localhost:5000";

async function signUp(name, email, password, userType) {

    // request Headers
    const requestHeader = {
        "Content-Type": "application/json"
    };

    const signUpBody = {
        name,
        email,
        password,
        role: userType
    };

    const signUpResult = await fetch(`${SERVER_URI}/signup`, {
        mode: "POST",
        headers: requestHeader,
        body: JSON.stringify(signUpBody)
    });

    const signUpData = await signUpResult.json();

    return signUpData;
}

async function logIn(email, password) {

    // request Headers
    const requestHeader = {
        "Content-Type": "application/json"
    };

    const logInBody = {
        email,
        password
    };

    const logInResult = await fetch(`${SERVER_URI}/login`, {
        mode: "POST",
        headers: requestHeader,
        body: JSON.stringify(logInBody)
    });

    const logInData = await logInResult.json();

    return logInData;
}

/* The code below is proprietary to N. D. Josias Aurel */
/* The function below is copied from one of my projects - Cropboard */
/* If you ever want to reuse this function in your project, please let me know */
/* Contact me a hey@josiasw.dev or DM me on Twitter, Handle : @JosiasWing */

// function to send GraphQL requests
// query has to be JSON stringified if JSON object
// action can either be query or mutation
async function sendGraphQLRequest(authToken, action, query, variablesPlaceholder, variables) {
    // request headers for GraphQL request
    const requestHeaders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
    };

    const graphqlActionQuery = {
        query: `query ${variablesPlaceholder} ${query}`,
        variables: JSON.stringify(variables)
    };

    const graphQLActionQueryWithVars = {
        query: `query ${query}`
    };

    const graphqlActionMutation = {
        query: `mutation ${variablesPlaceholder} { ${query} }`,
        variables: JSON.stringify(variables)
    };

    if (action === "query") {
        const queryResponse = await fetch(`${SERVER_URI}/graphql`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(graphqlActionQuery)
        });

        const queryData = await queryResponse.json();

        return queryData;

    } else if (action === "mutation") {
        const queryResponse = await fetch(`${SERVER_URI}/graphql`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(graphqlActionMutation)
        });

        const queryData = await queryResponse.json();

        return queryData;

    } else if (action === "queryWithVars") {

        const queryResponse = await fetch(`${SERVER_URI}/graphql`, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(graphQLActionQueryWithVars)
        });

        const queryData = await queryResponse.json();

        return queryData;
    } else {
        return Error("UnknownAction");
    }

    
}

/* © Josias Aurel --  END */

async function fetchUsers(authToken) {
    const getUsersQuery = "{ getUsers() { name, email, id } }";

    const getUsersQueryresult = await sendGraphQLRequest(authToken, "query", getUsersQuery);

    return getUsersQueryresult?.data !== null ? getUsersQueryresult?.data : [];
}

async function fetchUser(authToken, userId) {

    const getUserQueryVariablesPlaceholder = "($id: String!)";
    const getUserQueryVariables = {id: userId};
    const getUserQuery = "getUser(id: $id) { name, email, id }";

    const getUserQuersResult = await sendGraphQLRequest(authToken, "queryWithVars", getUserQuery, getUserQueryVariablesPlaceholder, getUserQueryVariables);

    const getUserQueryData = await getUserQuersResult.json();

    return getUserQueryData?.data;
}

async function fetchArticles(authToken) {

    const getArticlesQuery = "{ getArticles() { title, content, readTime, owner { name } } }";

    const getArticlesQueryResult = await sendGraphQLRequest(authToken, "query", getArticlesQuery);

    return getArticlesQueryResult?.data !== null ? getArticlesQueryResult?.data : [];
}

async function fetchArticle(authToken, articleId) {
    const getArticleQueryVariablesPlaceholder = "($id: String!)";
    const getArticleQueryVariables = {id: userId};
    const getArticleQuery = "getArticle(id: $id) { title, content, readTime, owner { name } }";

    const getArticleQuersResult = await sendGraphQLRequest(authToken, "queryWithVars", getArticleQuery, getArticleQueryVariablesPlaceholder, getArticleQueryVariables);

    const getArticleQueryData = await getArticleQuersResult.json();

    return getArticleQueryData?.data;
}