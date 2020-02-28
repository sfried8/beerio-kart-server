import { Request, Response } from "express";
import Player, { IPlayer } from "../Player";

export const allPlayers = (req: Request, res: Response) => {
    Player.find((err: any, players: IPlayer[]) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(players);
        }
    });
};

export const getPlayer = (req: Request, res: Response) => {
    Player.findById(req.params.id, (err: any, player: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(player);
        }
    });
};

export const deletePlayer = (req: Request, res: Response) => {
    Player.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send("Successfully Deleted Player");
        }
    });
};

export const updatePlayer = (req: Request, res: Response) => {
    Player.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, player: any) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(player);
            }
        }
    );
};

export const addPlayer = (req: Request, res: Response) => {
    const player = new Player(req.body);

    player.save((err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(player);
        }
    });
};
