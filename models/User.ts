import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "Anonymous",
            min: 2,
            max: 100,
            // required: true
        },
        email: {
            type: String,
            math: /.+\@.+\..+/,
            min: 2,
            max: 100,
        },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;