
import { pool } from "../../database"


async function getAllTeams() {

    const query = `
    SELECT * FROM sport.team;
  `;
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getAllTeams }


