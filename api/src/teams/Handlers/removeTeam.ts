import { pool } from "../../database";

async function removeTeam(teamId: number) {
    const query = `
        DELETE FROM sport.team
        WHERE teamId = ?;
    `;

    const results = await pool.execute(query, [teamId]);
    return results; // Return the result of the DELETE query
}

export { removeTeam };
