import { Request, Response } from "express";

export const allDatapoints = (req: Request, res: Response) => {
    res.send("Returns all Datapoints");
};

export const getDatapoint = (req: Request, res: Response) => {
    res.send("Returns one Datapoint");
};

export const deleteDatapoint = (req: Request, res: Response) => {
    res.send("Returns one Datapoint");
};

export const updateDatapoint = (req: Request, res: Response) => {
    res.send("Returns one Datapoint");
};

export const addDatapoint = (req: Request, res: Response) => {
    res.send("Returns one Datapoint");
};
