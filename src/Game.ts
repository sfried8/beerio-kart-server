import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
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
}

export const GameSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    players: { type: [String], required: true },
    numRaces: { type: Number, required: true },
    history: { type: [[Number]], required: true }
});

const Game = mongoose.model<IGame>("Game", GameSchema);
export default Game;
