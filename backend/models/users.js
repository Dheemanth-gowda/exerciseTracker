const { Schema, mongo, Mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: Sting,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
}, {
    timestamps: true,
}
);

const User = Mongoose.model('User', userSchema);

module.exports = User;

