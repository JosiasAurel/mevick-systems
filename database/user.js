
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