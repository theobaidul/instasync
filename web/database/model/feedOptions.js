import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        shop: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        layout: {
            type: String,
            required: true,
        },
        postSizing: {
            type: String,
            required: true,
        },
        postSpacing: {
            type: String,
            required: true,
        },
        postOnClick: {
            type: String,
            required: true,
        },
        configuration: {
            type: String,
            required: true,
        },
        rows: {
            type: String,
            required: true,
        },
        columns: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const feedOptions = new mongoose.model('Feed_Options', schema);

export default feedOptions;
