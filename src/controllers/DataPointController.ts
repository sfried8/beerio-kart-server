import { Request, Response } from "express";
import DataPoint, { IDataPoint } from "../DataPoint";

export const allDataPoints = (req: Request, res: Response) => {
    DataPoint.find((err: any, datapoints: IDataPoint[]) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(datapoints);
        }
    });
};

export const getDataPoint = (req: Request, res: Response) => {
    DataPoint.findById(req.params.id, (err: any, datapoint: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(datapoint);
        }
    });
};
export const findDataPoints = async (req: Request, res: Response) => {
    let query = DataPoint.find();
    if (req.query.game) {
        query = query.where("gameId").equals(req.query.game);
    }
    if (req.query.player) {
        query = query.where("playerId").equals(req.query.player);
    }
    try {
        const datapoints = await query.exec();
        res.send(datapoints);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const deleteDataPoint = (req: Request, res: Response) => {
    DataPoint.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("Successfully Deleted DataPoint");
        }
    });
};

export const updateDataPoint = (req: Request, res: Response) => {
    DataPoint.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, datapoint: any) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(datapoint);
            }
        }
    );
};
export const addDataPoint = (req: Request, res: Response) => {
    const datapoint = new DataPoint(req.body);

    datapoint.save((err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(datapoint);
        }
    });
};
