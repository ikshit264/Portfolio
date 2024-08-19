import mongoose, { mongo, Schema } from 'mongoose'

export interface IUser {
    name :string;
    email: string;
    emailVerified ?: boolean;
    image ?: string;
    password : string;
}

const UserSchema : Schema<IUser> = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    emailVerified : {
        type : Boolean,
        default : false,
    },
    image : {
        type : String,
    },
    password : {
        type : String,
        required : true,
    }
}, {timestamps : true})

export const User = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User', UserSchema)