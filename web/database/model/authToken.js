import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        shop: {
            type: String,
            required: true,
        },
        accessToken: {
            type: String,
            required: true,
        },
        tokenType: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        expiresIn: {
            type: String,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const authToken = new mongoose.model('Auth_Token', schema);

export default authToken;
