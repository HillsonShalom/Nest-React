import mongoose, { Document, Schema } from "mongoose"
import { User } from "./user.entity"

export interface UserDocument extends User, Document {}

export const UserSchema = new Schema<UserDocument>({
    username: {
        type: String,
        required: [true, "username is mandatory"]
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    },
    email: {
        type: String,
        required: [true, "email is mandatory"]
    },
    about: {
        type: String
    },
    age: {
        type: Number
    },
    male: {
        type: Boolean
    },
    dateOfBirth: {
        type: mongoose.Schema.Types.Date
    },
    address: {
        country: {
            type: String
        },
        city: {
            type: String
        },
        street: {
            type: String
        }
    }
}, { timestamps: true });