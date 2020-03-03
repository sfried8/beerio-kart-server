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

export interface IGame extends mongoose.Document {
    date?: Date;
    players: string[];
    numRaces: number;
    history: number[][];
    courseHistory: number[];
}

export const GameSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    players: { type: [String], required: true },
    numRaces: { type: Number, required: true },
    history: { type: [[Number]], required: true },
    courseHistory: { type: [Number], required: true }
});

const Game = mongoose.model<IGame>("Game", GameSchema);
export default Game;
