
import { pool } from "../../database"


async function createNewGame(team_B_id: number, team_A_id: number, team_A_Score: number, team_B_Score: number,game_time:Date) {

    const query = `
    INSERT INTO sport.game (team_B_id, team_A_id, team_A_Score, team_B_Score, game_time)
    VALUES (?, ?, ?, ?, ?);
`;
    const results = await pool.execute(query, [team_B_id, team_A_id, team_A_Score, team_B_Score,game_time]);
    const [data] = results;
    return data;
}

export { createNewGame }


