import express, { Request, Response } from "express";
import * as PlayerController from "./controllers/PlayerController";
import * as GameController from "./controllers/GameController";
import * as DataPointController from "./controllers/DataPointController";

const cors = require("cors");
const bodyParser = require("body-parser");

// Our Express APP config
const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(cors());
app.set("port", process.env.PORT || 4000);

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"));

app.get("/players", PlayerController.allPlayers);
app.get("/player/:id", PlayerController.getPlayer);
app.post("/player", PlayerController.addPlayer);
app.put("/player/:id", PlayerController.updatePlayer);
app.delete("/player/:id", PlayerController.deletePlayer);

app.get("/games", GameController.allGames);
app.get("/game/:id", GameController.getGame);
app.post("/game", GameController.addGame);
app.put("/game/:id", GameController.updateGame);
app.delete("/game/:id", GameController.deleteGame);

app.get("/datapoints", DataPointController.allDataPoints);
app.get("/datapoint/:id", DataPointController.getDataPoint);
app.post("/datapoint", DataPointController.addDataPoint);
app.put("/datapoint/:id", DataPointController.updateDataPoint);
app.delete("/datapoint/:id", DataPointController.deleteDataPoint);

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
