
import { pool } from "../../database/"


async function getAllGamesAndTeams() {
    const query = `
    SELECT
        game.*,
        team_a.team_name AS team_a_name,
        team_a.main_color AS team_a_main_color,
        team_a.secondary_color AS team_a_secondary_color,
        team_b.team_name AS team_b_name,
        team_b.main_color AS team_b_main_color,
        team_b.secondary_color AS team_b_secondary_color
    FROM
        sport.game
    JOIN
        sport.team AS team_a ON game.\`team_A_id\` = team_a.teamId
    JOIN
        sport.team AS team_b ON game.\`team_B_id\` = team_b.teamId;
  `;
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}

export { getAllGamesAndTeams }


