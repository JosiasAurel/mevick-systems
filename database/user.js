
// this file will contain helper functions to interact with mongo database

// this file will handle the operations for users specifically

const { User } = require("../models/index");

function createUser(name, email, password, role) {

    let isSuccess = false;

    let userRegistrationDate = new Date().toString();

    let newUser = User.create({
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

    newUser.save(); // save newly created user to database

    if (isSuccess) {
        return {
            status: "success"
        }
    } else {
        return { status: false }
    }
}

function updateUser(userId, { name, email, password }) {

    let isFetchUserError = false;
    let isUpdateUserError = false;
    let userInfo;

    User.findById(userId, (error, user_) => {
        if (error) {
            isFetchUserError = true;
            return;
        }

        let name_ = name ? name : user_.name;
        let email_ = email ? email : user_;
        let password_ = password ? password : user_.password;

        User.findByIdAndUpdate(userid, {name: name_, email: email_, password: password_}, (error, updatedUser_) => {
            if (error) {
                isUpdateUserError = true;
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

function deleteUser(userId) {

    let isSuccess = false;

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