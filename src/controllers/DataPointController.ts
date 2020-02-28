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
export const findDataPoint = (req: Request, res: Response) => {
    DataPoint.findById(req.params.id, (err: any, datapoint: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(datapoint);
        }
    });
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
