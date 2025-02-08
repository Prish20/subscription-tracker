import mongoose from "mongoose";


/**
 * User Schema
 * @param {String} name - User Name
 * @param {String} email - User Email
 * @param {String} password - User Password
 * @param {Date} createdAt - User Created Date
 * @param {Date} updatedAt - User Updated Date
 * @returns {Object} User Schema
 * @version 1.0
 */
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, "User Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    password: {
        type: String,
        required: [true, "User Password is required"],
        minLength: 6,
    }

}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
