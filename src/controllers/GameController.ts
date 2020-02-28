import { Request, Response } from "express";
import Game, { IGame } from "../Game";
import DataPoint from "../DataPoint";

export const allGames = (req: Request, res: Response) => {
    Game.find((err: any, games: IGame[]) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(games);
        }
    });
};

export const getGame = (req: Request, res: Response) => {
    Game.findById(req.params.id, (err: any, game: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(game);
        }
    });
};

export const deleteGame = (req: Request, res: Response) => {
    Game.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            DataPoint.deleteMany({ gameId: req.params.id }, (err2: any) => {
                if (err2) {
                    res.status(500).send(err2);
                } else {
                    res.send(
                        "Successfully deleted game and associated datapoints"
                    );
                }
            });
        }
    });
};
export const addHistoryToGame = (req: Request, res: Response) => {
    Game.findByIdAndUpdate(
        req.params.id,
        { history: req.body },
        (err, game) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(game);
            }
        }
    );
};
export const updateGame = (req: Request, res: Response) => {
    Game.findByIdAndUpdate(req.params.id, req.body, (err, game) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(game);
        }
    });
};

export const addGame = (req: Request, res: Response) => {
    console.log(req);
    console.log(req.body);
    const game = new Game(req.body);

    game.save((err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(game);
        }
    });
};
