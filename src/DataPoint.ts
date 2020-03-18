import mongoose = require("mongoose");
import Game from "./Game";

const uri: string =
    "mongodb+srv://dbUser2:gripitdontripit@cluster0-wsz7z.mongodb.net/test?retryWrites=true&w=majority";

export interface IDataPoint extends mongoose.Document {
    playerId: string;
    gameId: string;
    course: number;
    date?: Date;
    x: number;
    y: number;
    r: number;
}

export const DataPointSchema = new mongoose.Schema({
    playerId: { type: String, required: true },
    gameId: { type: String, required: true },
    course: { type: Number, required: false },
    date: { type: Date, required: false },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    r: { type: Number, required: false }
});

const DataPoint = mongoose.model<IDataPoint>("DataPoint", DataPointSchema);
mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

export default DataPoint;
