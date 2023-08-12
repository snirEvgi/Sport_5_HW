
import express, { Request, Response, NextFunction } from "express"
import { getTeamByName } from "./Handlers/getTeamByName";
import { getAllTeams } from "./Handlers/getAllTeams";
import { createNewTeam } from "./Handlers/createNewTeam";
import { removeTeam } from "./Handlers/removeTeam";
const teamsRouter = express.Router();

teamsRouter.get("/", getTeams)
teamsRouter.get("/search", getTeam)
teamsRouter.post("/new", createTeam)
teamsRouter.delete("/:teamId",removeTeamByID)


async function getTeams(req: Request, res: Response, next: NextFunction) {    
    try {
        const results = await getAllTeams()
        res.json(results)
    } catch (error) {
        console.log("Team Not Exist")
        
        return next(error)
    }
}

async function getTeam(req: Request, res: Response, next: NextFunction) {
    const { teamName } = req.query 
    
    try {
        const results = await getTeamByName(teamName as string)
        res.json(results)
    } catch (error) {
        
        console.log("Team Not Exist")
        
        return next(error)
    }
}
async function createTeam(req: Request, res: Response, next: NextFunction) {
    const { team_name, city, main_color, secondary_color, semel } = req.body 
    
    try {
        const results = await createNewTeam(team_name as string,city as string,main_color as string,secondary_color as string,semel as string)
        res.json(results)
    } catch (error) {
        console.log("Team Not Exist")
        
        return next(error)
    }
}
async function removeTeamByID(req: Request, res: Response, next: NextFunction) {
    const { teamId } = req.params;
    
    try {
        const results = await removeTeam(parseInt(teamId));
        res.json({ message: "Team removed successfully", results });
    } catch (error) {
        console.error(error);
        return next(error);
    }
}






export { teamsRouter };