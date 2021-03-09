const { Schema, mongo, Mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {
        type: Sting,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    description:{
        type:Number,
        required: true,
    }, 
    date:{
        type:Date,
        required: true,
    }
}, {
    timestamps: true,
}
);

const Exercise = Mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

