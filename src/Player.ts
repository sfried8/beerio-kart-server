import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

export interface IPlayer extends mongoose.Document {
    name: string;
}

export const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const Player = mongoose.model<IPlayer>("Player", PlayerSchema);
export default Player;
