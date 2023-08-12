
import { pool } from "../../database"


async function getTeamByName(teamName:string) {

    const query = `
    SELECT * FROM sport.team WHERE team_name = ?;
  `;
    const results = await pool.execute(query ,[teamName]);
    const [data] = results;
    return data;
}

export { getTeamByName }


