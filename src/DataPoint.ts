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

export interface IDataPoint extends mongoose.Document {
    playerId: string;
    gameId: string;
    course: number;
    x: number;
    y: number;
}

export const DataPointSchema = new mongoose.Schema({
    playerId: { type: String, required: true },
    gameId: { type: String, required: true },
    course: { type: Number, required: false },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
});

const DataPoint = mongoose.model<IDataPoint>("DataPoint", DataPointSchema);
export default DataPoint;
