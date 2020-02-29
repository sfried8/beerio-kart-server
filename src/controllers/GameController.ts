import { Request, Response } from "express";
import Game from "../Game";
import DataPoint from "../DataPoint";
import Player from "../Player";

export const allGames = async (req: Request, res: Response) => {
    try {
        const games = await Game.find().exec();
        const gamedatalist = [];
        for (const game of games) {
            const players = await Player.find()
                .where("_id")
                .in(game.players)
                .exec();
            gamedatalist.push({ game, players });
        }
        res.send(gamedatalist);
    } catch (error) {
        res.status(500).send(error);
    }
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

export async function getGameData(req: Request, res: Response) {
    try {
        const game = await Game.findById(req.params.id).exec();
        if (!game) {
            res.status(400).send("Game not found for id " + req.params.id);
            return;
        }

        const players = await Player.find()
            .where("_id")
            .in(game.players)
            .exec();
        const datapoints = await DataPoint.find()
            .where("gameId")
            .equals(game._id)
            .exec();
        res.send({ game, players, datapoints });
    } catch (error) {
        res.status(500).send(error);
    }
}

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
    const game = new Game(req.body);

    game.save((err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(game);
        }
    });
};
