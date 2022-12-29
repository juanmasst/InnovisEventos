import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    dni: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    numAddress: {
        type: Number,
        require: true
    },
    postalNum: {
        type: Number
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Customer', customerSchema);