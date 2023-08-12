
import { pool } from "../../database"


async function createNewTeam(team_name: string, city: string, main_color: string, secondary_color: string,semel:string) {

    const query = `
    INSERT INTO sport.team (team_name, city, main_color, secondary_color, semel)
    VALUES (?, ?, ?, ?, ?);
`;
    const results = await pool.execute(query, [team_name, city, main_color, secondary_color,semel]);
    const [data] = results;
    return data;
}

export { createNewTeam }


