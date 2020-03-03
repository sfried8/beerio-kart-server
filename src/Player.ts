import mongoose = require("mongoose");

const uri: string =
    "mongodb+srv://dbUser2:gripitdontripit@cluster0-wsz7z.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
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
