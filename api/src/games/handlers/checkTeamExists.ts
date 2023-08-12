import { pool } from "../../database";

async function checkTeamExists(teamID: number) {
  const query = `SELECT * FROM sport.team WHERE teamId = ?;`

  const results = await pool.execute(query, [teamID]);
  const [data] = results;

  if ((data as any).length !== 0) {
    return true;
  } else {
    return false;
  }
}

export { checkTeamExists };