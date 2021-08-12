import mongoose, { Schema, model, Document } from "mongoose";

interface IUser extends Document {
    name: string
    email: string
    password: string
    role: string
}

const UserSchema = new Schema<IUser>({
    name: String,
    email: String,
    password: String,
    role: String
});

const User = model("User", UserSchema);

export { User };