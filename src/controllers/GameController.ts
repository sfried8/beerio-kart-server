import { Request, Response } from "express";

export const allGames = (req: Request, res: Response) => {
    res.send("Returns all Games");
};

export const getGame = (req: Request, res: Response) => {
    res.send("Returns one Game");
};

export const deleteGame = (req: Request, res: Response) => {
    res.send("Returns one Game");
};

export const updateGame = (req: Request, res: Response) => {
    res.send("Returns one Game");
};

export const addGame = (req: Request, res: Response) => {
    res.send("Returns one Game");
};
