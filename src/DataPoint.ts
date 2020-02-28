import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected!");
    }
});

export interface IDataPoint extends mongoose.Document {
    playerId: string;
    gameId: string;
    x: number;
    y: number;
}

export const DataPointSchema = new mongoose.Schema({
    playerId: { type: String, required: true },
    gameId: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
});

const DataPoint = mongoose.model<IDataPoint>("DataPoint", DataPointSchema);
export default DataPoint;
