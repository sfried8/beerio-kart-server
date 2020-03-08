import { Request, Response } from "express";
import Player, { IPlayer } from "../Player";
import Game from "../Game";
import DataPoint from "../DataPoint";

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

export async function getPlayerData(req: Request, res: Response) {
    try {
        const player = await Player.findById(req.params.id).exec();
        if (!player) {
            res.status(400).send("Player not found for id " + req.params.id);
            return;
        }

        const games = await Game.find({ players: player.id }).exec();

        const datapoints = await DataPoint.find()
            .where("playerId")
            .equals(player.id)
            .exec();
        res.send({ games, player, datapoints });
    } catch (error) {
        res.status(500).send(error);
    }
}
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
