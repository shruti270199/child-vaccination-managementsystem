import mongoose from "mongoose";

const Schema = mongoose.Schema;

const childDetailsSchema = new Schema({

    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: Number
    }}, 
    {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }});

module.exports = mongoose.model("ChildDetails", childDetailsSchema);