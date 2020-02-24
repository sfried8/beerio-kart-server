import { Request, Response } from "express";

export const allPlayers = (req: Request, res: Response) => {
    res.send("Returns all Players");
};

export const getPlayer = (req: Request, res: Response) => {
    res.send("Returns one Player");
};

export const deletePlayer = (req: Request, res: Response) => {
    res.send("Returns one Player");
};

export const updatePlayer = (req: Request, res: Response) => {
    res.send("Returns one Player");
};

export const addPlayer = (req: Request, res: Response) => {
    res.send("Returns one Player");
};
