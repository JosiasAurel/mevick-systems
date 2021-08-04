
// this file will contain helper functions to interact with mongo database

// this file will handle the operations for users specifically

const { User } = require("../models/index");

// this function will also be used to sign up a user
async function createUser(name, email, password, role) {

    // we want to check if there was an error creating the user
    let isSuccess = false;

    // the user registration date is date string on of server timetzone
    let userRegistrationDate = new Date().toString();

    // creating the user
    let newUser = new User({
        name,
        email,
        password,
        role,
        registrationDate: userRegistrationDate
    }, (error, createdUser) => {
        if (error) {
            return;
        }

        isSuccess = true;
    });

    // save the user in the database
    await newUser.save(); // save newly created user to database

    // check status before proceeding

    // -> handling fail safe
    if (isSuccess) {
        return {
            status: "success"
        }
    } else {
        return { status: false }
    }
}

// handler for updating users in the database
function updateUser(userId, { name, email, password }) {


    let isFetchUserError = false; // checker for fetching old user data -> has is passed or failed ?
    let isUpdateUserError = false; // checker if the user update is a success or a
    let userInfo;

    User.findById(userId, (error, user_) => {
        if (error) {
            isFetchUserError = true; // set fetch error if failed
            return;
        }

        // below is pretty straight forward
        let name_ = name ? name : user_.name; 
        let email_ = email ? email : user_;
        let password_ = password ? password : user_.password;

        // try updating the user
        User.findByIdAndUpdate(userid, {name: name_, email: email_, password: password_}, (error, updatedUser_) => {
            if (error) {
                isUpdateUserError = true; // set update error if update fails
                return;
            }
            
        });
    });

    if (!isFetchUserError) {
        if (!isUpdateUserError) {
            return {status: true}
        } else {
            return {status: "Could not update User"}
        }
    } else {
        return {status: `Could not find User with id ${userId}`}
    }


}

// handler for deleting a user 
function deleteUser(userId) {

    let isSuccess = false; // checker for operation success

    // try deleting the user
    User.findByIdAndDelete(userId, (error, _) => {
        if (error) {
            return;
        }

        isSuccess = true;
    });

    if (isSuccess) {
        return {status: true}
    } else {
        return { status: false }
    }
}

// handler for logging in a user
function loginUser(email, password) {

    let isLoginError = false;
    let user_;

    User.find({email, password}, (error, user) => {
        if (error) {
            isLoginError = true;
        }

        user_ = user;
    });

    if (!isLoginError) {
        { token: user_._id }
    } else {
        { token: "Error" }
    }
}

module.exports = { createUser, updateUser, deleteUser, loginUser };