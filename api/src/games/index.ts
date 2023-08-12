
import express, { Request, Response, NextFunction } from "express"
import { getAllGamesAndTeams } from "./handlers/getAllGames";
import { createNewGame } from "./handlers/createNewGame";
import { updateGameScores } from "./handlers/updateScore";
import { checkTeamExists } from "./handlers/checkTeamExists";
const gamesRouter = express.Router();

gamesRouter.get("/", getGames)
gamesRouter.post("/new", createGame)
gamesRouter.put("/update/:id", updateGame)

 
async function getGames(req: Request, res: Response, next: NextFunction) {
    try {
        const results = await getAllGamesAndTeams()
        // console.log(results);
        res.json(results)
    } catch (error) {
        console.log(error);
        
        return next(error)
    }
}
async function createGame(req: Request, res: Response, next: NextFunction) {
    const { team_B_id, team_A_id, team_A_Score, team_B_Score, game_time } = req.body 
    
    try {
        const teamAExists = await checkTeamExists(team_A_id);
        const teamBExists = await checkTeamExists(team_B_id);
    
        if (!teamAExists || !teamBExists) {
          return res.status(400).json({ error: "One or both teams do not exist." });
        }
        const result = await createNewGame(team_B_id as number,team_A_id as number,team_A_Score as number,team_B_Score as number,game_time as Date);
        return res.json(result);
      } catch (error) {
        console.log(error);
        return next(error);
      }
    
}
async function updateGame(req: Request, res: Response, next: NextFunction) {
        const gameId = parseInt(req.params.id);
        const { team_A_Score, team_B_Score } = req.body;
      
        try {
          const results = await updateGameScores(gameId, team_A_Score, team_B_Score);
          res.json(results);
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Error updating game scores" });
        }
      }




export { gamesRouter };