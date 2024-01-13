import mongoose, { Schema, models } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password_reset_token: {
        required: false,
        type: Schema.Types.String,
        trim: true,
    },
    magic_link_token: {
        required: false,
        type: Schema.Types.String,
        trim: true,
    },
    magic_link_sent_at: {
        required: false,
        type: Schema.Types.Date,
    },
},
    {
        timestamps: true
})

const User = models.User || mongoose.model("User", userSchema);

export default User;